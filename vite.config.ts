import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { presetAttributify, presetUno } from 'unocss'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Unocss({
    presets: [presetAttributify(),presetUno(),],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
