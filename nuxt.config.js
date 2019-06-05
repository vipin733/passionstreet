import pkg from './package'
require('dotenv').config()
const webpack = require('webpack')
export default {
  mode: 'spa',
  server: {
    port: process.env.NUXT_PORT, // default: 3000
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/slick.css' },
      { rel: 'stylesheet', href: '/css/event-detail-page.css' },
      { rel: 'stylesheet', href: '/css/create-event-css.css' },
      
      {  rel: 'stylesheet', href: '/css/carousel-css.css' },
      {  rel: 'stylesheet', href: '/css/font-awesome.min.css' },
    ],
    script: [
      { src: '/js/jquery-3.2.1.min.js', body: true },
      { src: '/js/bootstrap.min,js', body: true },
      { src: '/js/tether-1.4.0.js', body: true },
      { src: '/js/slick.js', body: true },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/sweetalert.js', 
    { src: '~plugins/vee-validate.js' },
     '~/plugins/axios.js',
      '~/plugins/jquery_bootstrap.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // Options
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/home'
    },

    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/oauth/token',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: {
            url: '/api/logout',
            method: 'post'
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: false
          }
        }
      }
    }
  },

  router: {
    // middleware: ['auth']
    // Set auth: false to exclude from global auth
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL
    // https: true,
    // strictSSL: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],

    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
