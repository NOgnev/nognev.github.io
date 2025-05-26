/// <reference types="vite/client" />

declare module 'virtual:pwa-register' {
  export function registerSW(config?: {
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
  }): () => void;
}