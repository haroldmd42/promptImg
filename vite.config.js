import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Agrega el "base" con el nombre exacto de tu repo
export default defineConfig({
  plugins: [react()],
  base: '/promptImg/', // 👈 muy importante
})
