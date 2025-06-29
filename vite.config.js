import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    cssMinify: 'esbuild' // Force esbuild for CSS minification
  },
  optimizeDeps: {
    exclude: ['lightningcss'] // Prevent LightningCSS issues
  }
})
