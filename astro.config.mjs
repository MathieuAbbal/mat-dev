import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mathieuabbal.github.io',
  base: '/mat-dev/',
  vite: {
    plugins: [tailwindcss()],
  },
});
