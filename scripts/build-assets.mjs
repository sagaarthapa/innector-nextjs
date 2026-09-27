// Minifies the template's plain CSS/JS into the copies actually served from public/ (Next does not process these):
//   theme-src/{loader,plugins,icons,main}.css -> public/css/*.min.css      theme-src/app.js -> public/js/app.min.js
// Run after editing any of those files:  npm run assets   (app/layout.tsx links the .min files).
//
// The readable sources live in theme-src/, not public/: they used to be public/css/main.css etc., readable (and
// editable) but never linked - except Next serves everything under public/ at its own path whether anything links to
// it or not, so the purchased template's full source, including its ThemeForest/author header comment, was directly
// fetchable by anyone who tried e.g. /css/main.css. Moving the sources outside public/ (while the build output paths
// below are unchanged) fixes that without changing anything else. esbuild is used in transform mode, so url(...)
// paths and the script's top-level function names (called across files as globals) are left untouched.
import { transform } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
const jobs = [
  ...["loader", "plugins", "icons", "main"].map((n) => ({ src: `theme-src/${n}.css`, out: `public/css/${n}.min.css`, loader: "css" })),
  { src: "theme-src/app.js", out: "public/js/app.min.js", loader: "js" },
];

for (const { src, out, loader } of jobs) {
  const code = await readFile(src, "utf8");
  const res = await transform(code, { loader, minify: true, legalComments: "none", target: loader === "js" ? "es2019" : ["chrome100", "safari15", "firefox100"] });
  await writeFile(out, res.code);
  console.log(`${src.padEnd(24)} ${kb(code.length).padStart(7)} -> ${kb(res.code.length).padStart(7)}`);
}
