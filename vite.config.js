import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portfolio/', // <-- VERY IMPORTANT FOR GITHUB PAGES
  plugins: [
    react(),
    tailwindcss(),
  ],
})
