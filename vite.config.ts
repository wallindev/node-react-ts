import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'grungecorp.dev', // 0.0.0.0 for all interfaces
    port: 8000,
  },
})
