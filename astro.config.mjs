// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const nodeEnv = process.env.NODE_ENV ?? 'development';
const site = process.env.SITE_URL ?? 'https://stay2.hoeschathome.de';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [react()],
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    },
  },
});
