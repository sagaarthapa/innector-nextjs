"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

/* Interactive Innector wordmark for the menu's media panel (.menu-media__wrapper).

   1. When the menu opens the letters drop in one by one, bounce once and settle upright as the
      assembled logo, centred on the panel. No physics engine runs while it just sits there.
   2. The first grab wakes a Matter.js engine (the one Azurio uses for the "Let's talk about your
      project" block, loaded globally by libs.min.js) with NO gravity. Every letter is a body tethered
      to its own slot in the word by a spring: grab one, drag it, stretch it, fling it into the walls or
      its neighbours, and on release it springs back upright into its place with a bit of overshoot.
      The logo never stays broken, and the engine goes back to sleep once the word is reassembled.
      Closing and reopening the menu replays the drop-in.

   "Stretch" is visual only (rigid bodies can't deform): a held letter is pulled toward the cursor
   through a soft spring, and the lag between cursor and letter (plus how far it is from home) is drawn
   as an elongation along the pull; impacts squash a letter along the contact normal and it wobbles
   back like jelly.

   The letter artwork is the logo itself, split per letter (public/images/innector/logo-letters/). */

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Matter?: any;
  }
}

type Pt = [number, number];
/* Collision outline in fractions of the letter's bounding box: a rectangle (optionally with rounded
   corners, as a fraction of its shorter side) or a convex polygon. */
type Part = { rect: [number, number, number, number]; round?: number } | { poly: Pt[] };
type Letter = { key: string; w: number; h: number; gold?: boolean; parts: Part[] };

const LETTER_DIR = "/images/innector/logo-letters";

/* The stencil "N": a slanted-top left stem, and a right stem joined to the diagonal (split into two
   convex pieces). Points are taken from the logo's own clip paths. */
const N_PARTS: Part[] = [
  { poly: [[0, 0.9964], [0, 0], [0.2409, 0.1819], [0.2409, 0.9964]] },
  { poly: [[0.4675, 0.2925], [0.7589, 0.5144], [0.7589, 0.8168], [0.4675, 0.5959]] },
  { poly: [[0.7589, 0.0012], [1, 0.0012], [1, 0.9988], [0.7589, 0.8168]] },
];

/* w / h are the letter's size in logo units (the wordmark is 173 units wide). */
const LETTERS: Letter[] = [
  { key: "i", w: 4.285, h: 19.988, parts: [{ rect: [0, 0, 1, 1] }] },
  { key: "n1", w: 17.789, h: 19.875, parts: N_PARTS },
  { key: "n2", w: 17.789, h: 19.875, parts: N_PARTS },
  { key: "e", w: 19.293, h: 19.984, gold: true, parts: [{ rect: [0, 0, 1, 1] }] },
  { key: "c", w: 18.438, h: 20.02, parts: [{ rect: [0, 0, 1, 1], round: 0.42 }] },
  // the T has its stem on the right: a full-width top bar plus a right-hand stem
  { key: "t", w: 12.629, h: 19.988, parts: [{ rect: [0, 0, 1, 0.2] }, { rect: [0.659, 0.2, 0.341, 0.8] }] },
  { key: "o", w: 21.395, h: 20.062, parts: [{ rect: [0, 0, 1, 1], round: 0.46 }] },
  {
    key: "r",
    w: 17.168,
    h: 20.039,
    parts: [
      { rect: [0, 0, 1, 0.52] },
      { rect: [0, 0.52, 0.25, 0.48] },
      { poly: [[0.37, 0.52], [0.62, 0.52], [1, 1], [0.7, 1]] },
    ],
  },
];

/* Which letters share a line, as indexes into LETTERS: the whole word on one line, like the logo.
   (Two lines would give bigger letters in this narrow panel: [[0, 1, 2, 3], [4, 5, 6, 7]].) */
const ROWS: number[][] = [[0, 1, 2, 3, 4, 5, 6, 7]];

const CFG = {
  fill: 0.88, // widest row spans this fraction of the panel width
  gap: 4.4, // space between letters in a row, in logo units (the logo's own spacing)
  rowGap: 7.5, // space between rows, in logo units
  // drop-in
  dropGravity: 3.2, // x panel height, in px/s^2
  dropBounce: 0.32, // fraction of speed kept after landing
  dropDelay: 0.45, // s before the first letter falls (the menu's clip-path reveal takes ~1s)
  dropStagger: 0.1, // s between letters
  // play mode (no gravity: the springs below are what puts a letter back)
  restitution: 0.55, // bounce off the panel walls and off other letters
  friction: 0.15,
  frictionAir: 0.015,
  density: 0.002,
  wall: 200,
  homePeriod: 36, // physics steps (~0.6s) for a released letter to swing back to its slot ...
  homeDamping: 0.4, // ... damping ratio: under 1 overshoots, so it bounces past and settles
  homeAngPeriod: 30, // same, for turning back upright
  homeAngDamping: 0.45,
  snapDist: 0.6, // px / px-per-step / rad: once a letter is this close to home and still, lock it in exactly
  snapSpeed: 0.05,
  snapAngle: 0.01,
  ghostAfter: 90, // steps (~1.5s): a letter still not home by then (wedged in a neighbour, or swapped past it) ghosts home
  grabStiffness: 0.025, // soft on purpose: Matter solves it 10x per step, so this is a rubber band, not a rigid grip
  stretchRef: 0.15, // held-letter stretch = lag behind the cursor / (panel width * this)
  maxSpeed: 28, // px per physics step: stops fast throws tunnelling through the walls
  // jelly spring, shared by landing, hover and impacts
  springK: 170, // period ~0.5s ...
  springC: 9, // ... and a couple of wobbles
};

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

// collision categories: the panel walls are 1 (Matter's default), letters are 2. A "ghost" letter only collides with walls.
const WALLS = 0x0001;
const LETTER = 0x0002;
const ALL = 0xffff;

function polygonCentroid(pts: { x: number; y: number }[]) {
  let a = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    const q = pts[(i + 1) % pts.length];
    const c = p.x * q.y - q.x * p.y;
    a += c;
    cx += (p.x + q.x) * c;
    cy += (p.y + q.y) * c;
  }
  a /= 2;
  return { x: cx / (6 * a), y: cy / (6 * a) };
}

type Item = {
  el: HTMLElement;
  body: any;
  w: number;
  h: number;
  com: { x: number; y: number }; // body centre of mass, in the frame where the bounding-box centre is the origin
  inertia: number;
  held: boolean;
  away: number; // physics steps since it was let go without having got home
  ghost: boolean; // passing through other letters on its way home
  // pose of the bounding-box centre: driven by the drop-in until play starts, by the body afterwards
  x: number;
  y: number;
  angle: number;
  slot: { x: number; y: number }; // where the letter belongs in the assembled logo
  startY: number;
  tilt: number; // start angle, unwound as the letter falls
  vy: number; // px/s, drop-in only
  delay: number; // s
  // jelly deformation: >0 stretched along `axis`, <0 squashed
  def: number;
  defV: number;
  axis: number;
};

type Sim = { destroy: () => void };

function startSim(box: HTMLElement, M: any): Sim | null {
  const W = box.clientWidth;
  const H = box.clientHeight;
  if (W < 50 || H < 50) return null; // panel is display:none below 1200px

  // ---------------------------------------------------------------- layout: centred rows of letters
  const rowUnits = ROWS.map((r) => r.reduce((sum, i) => sum + LETTERS[i].w, 0) + CFG.gap * (r.length - 1));
  const lineH = 20; // logo units
  const blockUnits = ROWS.length * lineH + (ROWS.length - 1) * CFG.rowGap;
  const unit = Math.min((W * CFG.fill) / Math.max(...rowUnits), (H * 0.7) / blockUnits);
  const slots: { x: number; y: number }[] = [];
  const top = H / 2 - (blockUnits * unit) / 2;
  ROWS.forEach((row, r) => {
    let x = W / 2 - (rowUnits[r] * unit) / 2;
    const y = top + (r * (lineH + CFG.rowGap) + lineH / 2) * unit;
    for (const i of row) {
      slots[i] = { x: x + (LETTERS[i].w * unit) / 2, y };
      x += (LETTERS[i].w + CFG.gap) * unit;
    }
  });

  // the tagline under the wordmark (CSS reads this from the panel) follows the word's actual position
  box.parentElement?.style.setProperty("--word-bottom", `${top + blockUnits * unit}px`);

  const phys = {
    restitution: CFG.restitution,
    friction: CFG.friction,
    frictionAir: CFG.frictionAir,
    density: CFG.density,
  };

  // the engine exists from the start but only runs (and holds the letters) once someone grabs one
  const engine = M.Engine.create();
  engine.gravity.x = 0;
  engine.gravity.y = 1;
  engine.constraintIterations = 10;
  engine.positionIterations = 20;
  engine.velocityIterations = 16;
  const world = engine.world;

  const T = CFG.wall;
  const walls = [
    M.Bodies.rectangle(W / 2, H + T / 2, W + T * 2, T, { isStatic: true }),
    M.Bodies.rectangle(-T / 2, H / 2, T, H + T * 2, { isStatic: true }),
    M.Bodies.rectangle(W + T / 2, H / 2, T, H + T * 2, { isStatic: true }),
    M.Bodies.rectangle(W / 2, -T / 2, W + T * 2, T, { isStatic: true }),
  ];

  // ---------------------------------------------------------------- letters
  const els = Array.from(box.querySelectorAll<HTMLElement>(".menu-letter"));
  const dropOrder = LETTERS.map((_, i) => i).sort(() => Math.random() - 0.5);
  const items: Item[] = LETTERS.map((L, i) => {
    const w = L.w * unit;
    const h = L.h * unit;
    const el = els[i];
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;

    // built around the bounding-box centre at (0, 0) so the element can be centred on it later
    const parts = L.parts.map((p) => {
      if ("rect" in p) {
        const [x, y, pw, ph] = p.rect;
        return M.Bodies.rectangle((x + pw / 2 - 0.5) * w, (y + ph / 2 - 0.5) * h, pw * w, ph * h, {
          ...phys,
          collisionFilter: { category: LETTER, mask: ALL, group: 0 }, // its own object: ghost mode is per letter
          chamfer: p.round ? { radius: p.round * Math.min(pw * w, ph * h) } : undefined,
        });
      }
      const pts = p.poly.map(([x, y]) => ({ x: (x - 0.5) * w, y: (y - 0.5) * h }));
      return M.Body.create({
        ...phys,
        collisionFilter: { category: LETTER, mask: ALL, group: 0 },
        position: polygonCentroid(pts),
        vertices: M.Vertices.clockwiseSort(pts),
      });
    });
    const body = parts.length > 1 ? M.Body.create({ ...phys, collisionFilter: { category: LETTER, mask: ALL, group: 0 }, parts }) : parts[0];
    const startY = -h / 2 - 20; // just above the panel's top edge
    return {
      el,
      body,
      w,
      h,
      com: { x: body.position.x, y: body.position.y },
      inertia: body.inertia,
      held: false,
      away: 0,
      ghost: false,
      x: slots[i].x,
      y: startY,
      angle: 0,
      slot: slots[i],
      startY,
      tilt: (Math.random() - 0.5) * 1.0,
      vy: 0,
      delay: CFG.dropDelay + dropOrder.indexOf(i) * CFG.dropStagger,
      def: 0,
      defV: 0,
      axis: Math.PI / 2,
    };
  });
  const byId = new Map<number, Item>(items.map((it) => [it.body.id, it]));

  // ---------------------------------------------------------------- play mode: letters become tethered bodies
  const runner = M.Runner.create();
  let playing = false; // engaged at least once
  let running = false; // engine currently stepping
  let idle = false; // everything is back home and still
  let restSteps = 0;
  const wake = () => {
    if (running) return;
    running = true;
    idle = false;
    restSteps = 0;
    M.Runner.run(runner, engine);
  };
  const engage = () => {
    if (playing) return;
    playing = true;
    engine.gravity.y = 0;
    for (const it of items) {
      // a letter still on its way down (or hopping) when clicked goes straight to its place
      it.x = it.slot.x;
      it.y = it.slot.y;
      it.angle = 0;
      it.vy = 0;
      M.Body.setAngle(it.body, 0);
      M.Body.setPosition(it.body, { x: it.slot.x + it.com.x, y: it.slot.y + it.com.y });
      M.Body.setVelocity(it.body, { x: 0, y: 0 });
      M.Body.setAngularVelocity(it.body, 0);
    }
    M.Composite.add(world, [...walls, ...items.map((it) => it.body)]);
    wake();
  };
  const setGhost = (it: Item, on: boolean) => {
    if (it.ghost === on) return;
    it.ghost = on;
    for (const part of it.body.parts) part.collisionFilter.mask = on ? WALLS : ALL;
  };
  // a letter that escaped through a wall at speed goes straight back home
  const sendHome = (it: Item) => {
    M.Body.setAngle(it.body, 0);
    M.Body.setPosition(it.body, { x: it.slot.x + it.com.x, y: it.slot.y + it.com.y });
    M.Body.setVelocity(it.body, { x: 0, y: 0 });
    M.Body.setAngularVelocity(it.body, 0);
  };

  // jelly squash on impact
  M.Events.on(engine, "collisionStart", (ev: any) => {
    for (const pair of ev.pairs) {
      const a = pair.bodyA.parent;
      const b = pair.bodyB.parent;
      const n = pair.collision.normal;
      const rel = Math.abs((a.velocity.x - b.velocity.x) * n.x + (a.velocity.y - b.velocity.y) * n.y);
      if (rel < 2.5) continue; // resting contact, not an impact
      const hit = Math.min(0.6, (rel - 2.5) * 0.04);
      for (const body of [a, b]) {
        const it = byId.get(body.id);
        if (!it || it.held) continue;
        if (Math.abs(it.def) < 0.08) it.axis = Math.atan2(n.y, n.x); // don't flip axis mid-wobble
        it.defV -= hit * 14;
      }
    }
  });

  // ---------------------------------------------------------------- pointer: hover, grab, drag, throw
  type Drag = { id: number; it: Item; c: any; p: { x: number; y: number } };
  let drag: Drag | null = null;
  let hovered: Item | null = null;

  const local = (e: PointerEvent) => {
    const r = box.getBoundingClientRect(); // r.width differs from W while the menu's open animation scales it
    return { x: ((e.clientX - r.left) * W) / r.width, y: ((e.clientY - r.top) * H) / r.height };
  };
  // the letter under the pointer; a small halo makes the thin "I" easy to catch
  const halo = Math.max(unit * 1.2, 9);
  const pick = (p: { x: number; y: number }): Item | null => {
    if (!playing) {
      // still the intro / untouched logo: the letters are upright, so a padded box around each one is enough
      let best: Item | null = null;
      let bestD = Infinity;
      for (const it of items) {
        const dx = Math.abs(p.x - it.x);
        const dy = Math.abs(p.y - it.y);
        if (dx <= it.w / 2 + halo && dy <= it.h / 2 + halo && dx + dy < bestD) {
          best = it;
          bestD = dx + dy;
        }
      }
      return best;
    }
    const bodies = items.map((it) => it.body);
    for (const [dx, dy] of [[0, 0], [halo, 0], [-halo, 0], [0, halo], [0, -halo]]) {
      const hit = M.Query.point(bodies, { x: p.x + dx, y: p.y + dy });
      if (hit.length) return byId.get(hit[0].id) ?? null;
    }
    return null;
  };

  const onDown = (e: PointerEvent) => {
    if (drag || (e.pointerType === "mouse" && e.button !== 0)) return;
    const p = local(e);
    const it = pick(p);
    if (!it) return;
    e.preventDefault();
    engage(); // the first grab wakes the physics; every letter stays tethered to its place
    wake();
    box.setPointerCapture(e.pointerId);
    const c = M.Constraint.create({
      pointA: { x: p.x, y: p.y },
      bodyB: it.body,
      pointB: { x: p.x - it.body.position.x, y: p.y - it.body.position.y },
      length: 0.01,
      stiffness: CFG.grabStiffness,
      damping: 0.08,
      render: { visible: false },
    });
    M.Composite.add(world, c);
    it.held = true;
    // like the CTA blocks: a held letter doesn't spin about the grab point
    M.Body.setInertia(it.body, Infinity);
    M.Body.setVelocity(it.body, { x: 0, y: 0 });
    M.Body.setAngularVelocity(it.body, 0);
    drag = { id: e.pointerId, it, c, p };
    box.classList.add("is-dragging");
  };
  const onMove = (e: PointerEvent) => {
    const p = local(e);
    if (drag) {
      if (e.pointerId !== drag.id) return;
      drag.p = { x: clamp(p.x, 0, W), y: clamp(p.y, 0, H) };
      drag.c.pointA.x = drag.p.x;
      drag.c.pointA.y = drag.p.y;
      return;
    }
    const it = pick(p);
    box.classList.toggle("is-over", !!it);
    if (it && it !== hovered && !it.held && Math.abs(it.def) < 0.05) {
      // a little "pop" on the letter under the cursor, so it's clear the letters are alive
      it.axis = Math.PI / 2;
      it.defV += 2.4;
    }
    hovered = it;
  };
  const onUp = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    M.Composite.remove(world, drag.c);
    M.Body.setInertia(drag.it.body, drag.it.inertia);
    drag.it.held = false; // the spring now snaps it back from whatever stretch it had
    try {
      box.releasePointerCapture(drag.id);
    } catch {
      /* already released */
    }
    drag = null;
    box.classList.remove("is-dragging");
  };
  const onLeave = () => {
    hovered = null;
    box.classList.remove("is-over");
  };
  box.addEventListener("pointerdown", onDown);
  box.addEventListener("pointermove", onMove);
  box.addEventListener("pointerup", onUp);
  box.addEventListener("pointercancel", onUp);
  box.addEventListener("pointerleave", onLeave);

  // ---------------------------------------------------------------- per-step: home springs + guard rails
  const w0 = (2 * Math.PI) / CFG.homePeriod;
  const kPos = w0 * w0;
  const cPos = 2 * CFG.homeDamping * w0;
  const wa = (2 * Math.PI) / CFG.homeAngPeriod;
  const kAng = wa * wa;
  const cAng = 2 * CFG.homeAngDamping * wa;

  M.Events.on(engine, "beforeUpdate", () => {
    let allHome = true;
    for (const it of items) {
      const b = it.body;
      const sp = Math.hypot(b.velocity.x, b.velocity.y);
      if (sp > CFG.maxSpeed) M.Body.setVelocity(b, { x: (b.velocity.x / sp) * CFG.maxSpeed, y: (b.velocity.y / sp) * CFG.maxSpeed });
      if (Math.abs(b.angularVelocity) > 0.4) M.Body.setAngularVelocity(b, Math.sign(b.angularVelocity) * 0.4);

      if (it.held) {
        allHome = false;
        it.away = 0;
        setGhost(it, false);
        // keep a held letter inside the panel
        const dx = b.bounds.min.x < 0 ? -b.bounds.min.x : b.bounds.max.x > W ? W - b.bounds.max.x : 0;
        const dy = b.bounds.min.y < 0 ? -b.bounds.min.y : b.bounds.max.y > H ? H - b.bounds.max.y : 0;
        if (dx || dy) M.Body.setPosition(b, { x: b.position.x + dx, y: b.position.y + dy });
        continue;
      }
      if (b.position.y > H + T || b.position.x < -T || b.position.x > W + T || b.position.y < -T) {
        sendHome(it);
        continue;
      }

      // spring toward the slot (bounding-box centre) and toward upright, as an under-damped oscillator
      const c = Math.cos(b.angle);
      const s = Math.sin(b.angle);
      const ex = b.position.x - (it.com.x * c - it.com.y * s) - it.slot.x;
      const ey = b.position.y - (it.com.x * s + it.com.y * c) - it.slot.y;
      const ang = Math.atan2(s, c); // wrapped to (-PI, PI]
      const vx = b.velocity.x;
      const vy = b.velocity.y;
      const av = b.angularVelocity;

      if (Math.hypot(ex, ey) < CFG.snapDist && Math.hypot(vx, vy) < CFG.snapSpeed && Math.abs(ang) < CFG.snapAngle && Math.abs(av) < CFG.snapAngle * 0.2) {
        // home and still: lock it in exactly, so the word is pixel-aligned again
        sendHome(it);
        it.away = 0;
        setGhost(it, false);
        continue;
      }
      allHome = false;
      // solid letters can wedge each other away from home (the stencil N's interlock, or two letters end up
      // swapped and push head-on); after a grace period the straggler stops colliding with letters until home
      if (++it.away > CFG.ghostAfter) setGhost(it, true);
      M.Body.setVelocity(b, { x: vx - kPos * ex - cPos * vx, y: vy - kPos * ey - cPos * vy });
      M.Body.setAngularVelocity(b, av - kAng * ang - cAng * av);
    }
    // everything back in place for a moment and nobody holding a letter: the engine can sleep
    restSteps = allHome && !drag ? restSteps + 1 : 0;
    if (restSteps > 20) idle = true;
  });

  // ---------------------------------------------------------------- render loop
  let raf = 0;
  const t0 = performance.now();
  let last = t0;
  let live = false;
  const G = H * CFG.dropGravity;

  const dropStep = (it: Item, now: number, dt: number) => {
    if (now - t0 < it.delay * 1000) return; // still waiting above the panel
    it.vy += G * dt;
    it.y += it.vy * dt;
    if (it.y >= it.slot.y) {
      it.y = it.slot.y;
      // a real landing, not just one frame's worth of gravity (matters when frames are slow: dt is clamped, but
      // G * dt can then exceed a fixed threshold and the letter would hop forever)
      if (it.vy > Math.max(140, G * dt * 2.5)) {
        // landing: squash against the floor, then hop
        it.axis = Math.PI / 2;
        it.defV -= Math.min(0.6, it.vy / 2600) * 14;
        it.vy = -it.vy * CFG.dropBounce;
      } else {
        it.vy = 0;
      }
    }
    // start crooked and straighten out as it falls into place
    it.angle = it.tilt * clamp((it.slot.y - it.y) / (it.slot.y - it.startY), 0, 1);
  };

  const tick = (now: number) => {
    const dt = clamp((now - last) / 1000, 0.001, 0.05);
    last = now;
    if (idle && running) {
      M.Runner.stop(runner);
      running = false;
    }
    for (const it of items) {
      const b = it.body;
      if (playing) {
        const c = Math.cos(b.angle);
        const s = Math.sin(b.angle);
        it.x = b.position.x - (it.com.x * c - it.com.y * s);
        it.y = b.position.y - (it.com.x * s + it.com.y * c);
        it.angle = b.angle;
      } else {
        dropStep(it, now, dt);
      }

      if (it.held && drag) {
        // rubber band: stretch along the line from where the letter was grabbed to the cursor
        const gx = b.position.x + (drag.c.pointB.x ?? 0);
        const gy = b.position.y + (drag.c.pointB.y ?? 0);
        const px = drag.p.x - gx;
        const py = drag.p.y - gy;
        const len = Math.hypot(px, py);
        // lag behind the cursor, plus a rubber-band tug that grows with the distance from home
        const away = Math.hypot(it.x - it.slot.x, it.y - it.slot.y);
        const target = len / (W * CFG.stretchRef) + (away / W) * 0.5;
        it.def += (clamp(target, 0, 1) - it.def) * 0.3;
        it.defV = 0;
        if (len > 2) it.axis = Math.atan2(py, px);
      } else {
        it.defV += (-CFG.springK * it.def - CFG.springC * it.defV) * dt;
        it.def += it.defV * dt;
      }
      it.def = clamp(it.def, -0.55, 1.1);

      const along = 1 + it.def;
      const across = 1 / Math.sqrt(along); // keep the area roughly constant
      it.el.style.transform =
        `translate3d(${it.x - it.w / 2}px, ${it.y - it.h / 2}px, 0) rotate(${it.axis}rad) ` +
        `scale(${along}, ${across}) rotate(${it.angle - it.axis}rad)`;
    }
    if (!live) {
      live = true;
      box.classList.add("is-live");
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return {
    destroy() {
      cancelAnimationFrame(raf);
      if (running) M.Runner.stop(runner);
      M.Events.off(engine);
      M.Composite.clear(world, false);
      M.Engine.clear(engine);
      box.removeEventListener("pointerdown", onDown);
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerup", onUp);
      box.removeEventListener("pointercancel", onUp);
      box.removeEventListener("pointerleave", onLeave);
      box.classList.remove("is-live", "is-over", "is-dragging");
      box.parentElement?.style.removeProperty("--word-bottom");
      for (const it of items) {
        it.el.style.transform = "";
        it.el.style.width = "";
        it.el.style.height = "";
      }
    },
  };
}

export default function MenuLetters() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const hamburger = document.querySelector(".mxd-menu__hamburger");
    if (!box || !hamburger) return;

    let sim: Sim | null = null;
    let stopTimer = 0;
    let waitTimer = 0;
    let resizeTimer = 0;

    // app.js toggles .active on the hamburger for the whole time the menu is open
    const isOpen = () => hamburger.classList.contains("active");

    const start = (tries = 0) => {
      window.clearTimeout(waitTimer);
      if (sim || !isOpen()) return;
      const M = window.Matter;
      if (!M) {
        // libs.min.js loads after hydration; only matters if the menu is opened very early
        if (tries < 40) waitTimer = window.setTimeout(() => start(tries + 1), 150);
        return;
      }
      sim = startSim(box, M);
    };

    const sync = () => {
      window.clearTimeout(stopTimer);
      if (isOpen()) {
        start();
      } else if (sim) {
        // let the menu's 1s close animation finish before tearing the letters down
        stopTimer = window.setTimeout(() => {
          sim?.destroy();
          sim = null;
        }, 1200);
      }
    };

    const observer = new MutationObserver(sync);
    observer.observe(hamburger, { attributes: true, attributeFilter: ["class"] });

    // physics is sized from the panel, so rebuild (letters drop in again) when the window changes size
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (!sim) return;
        sim.destroy();
        sim = null;
        start();
      }, 250);
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(stopTimer);
      window.clearTimeout(waitTimer);
      window.clearTimeout(resizeTimer);
      sim?.destroy();
    };
  }, []);

  return (
    <>
      {/* Company name under the wordmark. The menu-logo__text class is what app.js hooks to give it the
          same line-by-line reveal as the rest of the menu text. Painted below the letters. */}
      <p className="menu-logo__text menu-letters__caption">
        <span>Innector</span>
        <span>IT Solutions</span>
      </p>
      <div className="menu-letters" ref={boxRef} role="img" aria-label="Innector">
        {LETTERS.map((L) => (
          <div className={`menu-letter${L.gold ? " menu-letter--gold" : ""}`} key={L.key}>
            <img src={`${LETTER_DIR}/${L.key}.svg`} alt="" draggable={false} />
          </div>
        ))}
      </div>
    </>
  );
}
