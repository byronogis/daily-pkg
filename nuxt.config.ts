// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    //
  },
  css: [
    'normalize.css',
    '~/assets/css/index.postcss',
  ],
  postcss: {
    plugins: {
      'autoprefixer': {},
      'postcss-nested': {},
    },
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  unocss: {
    attributify: true,
  },
})
