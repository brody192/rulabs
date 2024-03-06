// Add this to your imports
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import css from "./postcss.config.js"

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/the76devs',
  build: {
    outDir: "./dist",
  },
  plugins: [
    svelte(),
  ],
  server: {
    port: 4200,
    host: 'localhost',
  },
});