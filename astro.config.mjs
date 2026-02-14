import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mathieuabbal.github.io',
  base: '/mat-dev/',
  integrations: [tailwind()],
});
