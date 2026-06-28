import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://tientour.com',          // <-- ton domaine en prod
  integrations: [sitemap({
    filter: (page) => !page.includes('/admin'),
  })],
});
