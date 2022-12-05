// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    //
  },
  css: [
    'normalize.css',
  ],
  postcss: {
    plugins: {
      'autoprefixer': {},
      'postcss-nested': {},
    },
  },
  modules: [
    '@unocss/nuxt',
  ],
  unocss: {
    attributify: true,
  },
})
