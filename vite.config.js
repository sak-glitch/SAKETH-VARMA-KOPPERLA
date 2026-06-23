import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, 'product.html'),
        'how-it-works': resolve(__dirname, 'how-it-works.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  // For GitHub Pages, change base to '/<repo-name>/' if deploying to a subpath
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});