import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: ['/src/app'],
      features: ['/src/features'],
      hooks: ['/src/hooks'],
    },
  },
  server: {
    open: 'http://localhost:5173',
  },
});
