import { defineConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'
import relay from 'vite-plugin-relay'

export default defineConfig({
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    },
  },
  plugins: [react(), relay],
})
