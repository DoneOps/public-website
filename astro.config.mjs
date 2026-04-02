// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://doneops.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/success'),
      serialize(item) {
        if (item.url === 'https://doneops.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.match(/\/(blog|case-studies)\/$/)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
    react(),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
