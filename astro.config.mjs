import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "[ext]/[name][extname]",
        },
      },
      minify: false,
    },
  },
  compressHTML: false,
});
