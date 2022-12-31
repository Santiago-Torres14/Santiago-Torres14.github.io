import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://santiagotorres.me',
  integrations: [mdx()]
});