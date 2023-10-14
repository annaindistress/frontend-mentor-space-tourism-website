import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-mentor-space-tourism-website/',
  plugins: [react()],
});
