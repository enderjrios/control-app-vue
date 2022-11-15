import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import Carbon from '@iconify-json/carbon/icons.json'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Unocss({
    presets: [presetAttributify(),presetUno(),presetIcons({
      // options
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      },
      collections:{carbon: Carbon.icons.json},
    }),],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
