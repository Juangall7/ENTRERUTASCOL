import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), node({ mode: 'standalone' })],
  
  output: 'hybrid',
  
  vite: {
    ssr: {
      external: ['pg', 'pg-pool']
    }
  },
  
  server: {
    port: 3000,
    host: true
  },
  
  build: {
    format: 'directory'
  },
  
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  experimental: {
    assets: true
  }
});