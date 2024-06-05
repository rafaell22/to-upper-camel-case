import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve('./src'),
    }
  },
  build: {
    outDir: './dist',
    lib: {
      entry: './src/index',
      name: 'toUpperSnakeCase',
      fileName: 'to-upper-snake-case'
    },
  }
});
