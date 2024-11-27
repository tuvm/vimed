import { resolve } from 'path';
import { UserConfig, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

const PROJECT_ROOT = resolve(__dirname, '../../');

export default defineConfig(async (mode) => {
  process.env.VITE_APP_VERSION = process.env.npm_package_version;

  process.env.MODE = mode?.mode;

  console.log('Building app with \x1b[96mReact\x1b[0m');

  const config: UserConfig = {
    root: __dirname,
    mode: mode?.mode,
    clearScreen: false,
    server: {
      host: '127.0.0.1',
      port: 5173,
    },
    base: './',
    build: {
      outDir: resolve(PROJECT_ROOT, '.vite/projects/viewer-web/'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      },
    },
    appType: 'mpa',
    plugins: [tsconfigPaths({ root: __dirname }), react()],
  };

  return config;
});
