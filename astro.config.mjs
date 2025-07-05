// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://software-techs-portal.vercel.app',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
