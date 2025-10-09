import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// 🔧 recrea __dirname de forma compatible con ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: '/promptImg/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
