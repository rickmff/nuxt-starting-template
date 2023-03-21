// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: [
    '~/assets/main.scss'
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
    '@nuxtjs/pwa'
  ],
  /*   pwa: {
    meta: {
      name: 'Nuxt Vite',
      description: 'Nuxt Vite'
    },
    manifest: {
      name: 'My Awesome App',
      lang: 'fa',
      useWebmanifestExtension: false
    }
  }, */
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
