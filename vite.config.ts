import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //I added 
  base: '/BudgetApp/',
  plugins: [react()],
})


