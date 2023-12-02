// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=600,initial-scale=1',
      title: 'فنام',
    }
  },
  pwa: {
    manifest: {
      name: 'فنام',
      short_name: 'فنام',
      description: "فنام"
    },

    icon: {
      source: './public/logofanam.png',
      fileName: 'logofanam.png',
      sizes: [64, 128, 256, 384, 512]
    },
    workbox: {

    }
  },

  bootstrapVueNext: {
    //@ts-ignore
    icons: true,
    composables: true, // Will include all composables
    // composables: {useBreadcrumb: true, useColorMode: true, all: false}, // Will include only useBreadcrumb & useColorMode
    // composables: {useBreadcrumb: false, useColorMode: false, all: true} // Will include everything except useBreadcrumb & useColorMode
  },
  css: [
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primeicons/primeicons.css",
    "~/assets/scss/index.scss",
    "~/assets/scss/iransans.scss",
    "~/assets/font-awesome.css",
    "~/assets/global.css",
    "~/assets/header.css",
    "~/assets/responsive.css",
    "~/assets/style.css",
    "bootstrap/dist/css/bootstrap.css",



  ],
  ssr: true,
  build: {
    transpile: ["primevue"]
  },
  modules: ["@kevinmarrec/nuxt-pwa", "@bootstrap-vue-next/nuxt"],
  plugins: [{ src: "@/plugins/i18n.ts" },


  { src: "@/plugins/primevue.ts" }],
})
