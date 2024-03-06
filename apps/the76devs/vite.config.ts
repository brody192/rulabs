// Add this to your imports
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import css from "./postcss.config.js"

export default defineConfig({
  plugins: [
    svelte(),
  ],
  server: {
    port: 4200,
    host: 'localhost',
  },
});