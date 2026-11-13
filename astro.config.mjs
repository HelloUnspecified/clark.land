// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clark.land',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/og') })],
  vite: {
    plugins: [tailwindcss()],
  },
  // Fully static: one page, no server code.
  output: 'static',
  // The toolbar would show up in the og.png screenshot.
  devToolbar: { enabled: false },
});
