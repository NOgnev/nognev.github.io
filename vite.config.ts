import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      manifest: {
        name: 'My Vite PWA',
        short_name: 'MyPWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#009FCC',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
      host: true,  // слушать на всех интерфейсах (для доступа по локальному IP)
      port: 5173,   // можно изменить, если надо
  },
  base: '/'
});
