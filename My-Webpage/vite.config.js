import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  root: '.',
  server: {
    host: true,
    port: 8080, // Change this if you want a different port
  },
  build: {
    outDir: 'dist',
  }
})
