import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: ['/src/app'],
      common: ['/src/common'],
      features: ['/src/features'],
    },
  },
  server: {
    open: 'http://localhost:5173',
  },
});
