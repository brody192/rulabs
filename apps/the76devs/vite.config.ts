// Add this to your imports
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import css from "./postcss.config.js"

export default defineConfig({
  build: {
    outDir: "../../dist/apps/the76devs",
  },
  plugins: [
    svelte(),
  ],
  server: {
    port: 4200,
    host: 'localhost',
  },
});