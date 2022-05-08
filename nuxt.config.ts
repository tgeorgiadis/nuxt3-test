import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
  */
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  buildModules: ['@nuxtjs/tailwindcss']
})
