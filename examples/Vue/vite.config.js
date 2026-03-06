import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig({
  base: './',
  plugins: [vue()],
  outDir: path.resolve(__dirname, '../../dist/Vue'),
  emptyOutDir: true,
})
