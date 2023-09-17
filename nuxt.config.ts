export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ibook',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Ibook - New way to read books online'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/acessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '@/components/Bosons',
    '@/components/Atoms',
    '@/components/Molecules',
    '@/components/Organisms',
    '@/components/Quarks',
    '@/components/Templates'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['@/assets/scss/breakpoints.scss', '@/assets/scss/colors.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://ibookapi.herokuapp.com/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
