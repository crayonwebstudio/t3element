import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://t3element.com',
  compressHTML: true,
  adapter: node({
    mode: 'standalone',
  }),
});
