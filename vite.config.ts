import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //I added 
  //base: '/BudgetApp/',
  plugins: [react()],
  
})
//tried this to avoid TS error overlays
//server.hmr.overlay = false


