import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ecell-team/', // Match your repository name
  plugins: [react()],
});

