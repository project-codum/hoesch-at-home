// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const nodeEnv = process.env.NODE_ENV ?? 'development';

export default defineConfig({
  site: 'https://www.hoeschathome.de', // update per deployment
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
