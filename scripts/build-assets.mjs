// Minifies the template's plain CSS/JS that is served straight from public/ (Next does not process these):
//   public/css/{loader,plugins,icons,main}.css -> *.min.css      public/js/app.js -> app.min.js
// Run after editing any of those files:  npm run assets   (app/layout.tsx links the .min files).
//
// The sources stay readable; only the .min copies are served. esbuild is used in transform mode, so url(...) paths and
// the script's top-level function names (called across files as globals) are left untouched.
import { transform } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
const jobs = [
  ...["loader", "plugins", "icons", "main"].map((n) => ({ src: `public/css/${n}.css`, out: `public/css/${n}.min.css`, loader: "css" })),
  { src: "public/js/app.js", out: "public/js/app.min.js", loader: "js" },
];

for (const { src, out, loader } of jobs) {
  const code = await readFile(src, "utf8");
  const res = await transform(code, { loader, minify: true, legalComments: "none", target: loader === "js" ? "es2019" : ["chrome100", "safari15", "firefox100"] });
  await writeFile(out, res.code);
  console.log(`${src.padEnd(24)} ${kb(code.length).padStart(7)} -> ${kb(res.code.length).padStart(7)}`);
}
