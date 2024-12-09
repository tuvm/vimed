import { build } from "vite";
import { readdirSync, rmSync, statSync } from "fs";
import { join } from "path";
import { spawn } from 'child_process';

const server = spawn('lerna run build:desktop --stream', {
  shell: true,
});
server.stdout.setEncoding('utf8');
server.stdout.on('data', (data) => {
  console.log(data.toString().trim());
});
server.stderr.setEncoding('utf8');
server.stderr.on('data', (data) => {
  console.log(data.toString().trim());
});

await build({ configFile: "main/vite.config.ts" });
await build({ configFile: "preload/vite.config.ts" });
await build({ configFile: "renderer/vite.config.ts" });


// Remove unnecessary font files (ttf, woff, eot)
// const files = readdirSync(".vite/renderer/assets", { withFileTypes: true });

let removedCount = 0;
let removedSizeKB = 0;

// files.forEach((file) => {
//     if (file.isFile) {
//         const name = file.name;
//         if (name.endsWith(".ttf") || name.endsWith(".woff") || name.endsWith(".eot")) {
//             const path = join(".vite/renderer/assets/", name);
//             const size = statSync(path).size / 1024;

//             rmSync(path);

//             removedSizeKB += size;
//             removedCount++;
//         }
//     }
// });

// if (removedCount > 0) {
//     console.log(
//         "Removed \x1b[31m" +
//             removedCount +
//             "\x1b[0m unnecessary files (TTF, WOFF, EOT) from the Renderer bundle \x1b[33m(" +
//             removedSizeKB.toLocaleString(undefined, { maximumFractionDigits: 0 }) +
//             " KB)\x1b[0m"
//     );
// }
