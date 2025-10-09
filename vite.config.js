import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 BASE debe coincidir con el nombre EXACTO de tu repo GitHub
export default defineConfig({
  plugins: [react()],
  base: '/promptImg/', // 👈 muy importante
})
