// playground/nuxt.config.ts
export default defineNuxtConfig({
  // BORRA la línea que decía srcDir: 'playground'
  // Al borrarla, Nuxt buscará las cosas justo donde está este archivo (que es lo correcto ahora).

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Irán Ledezma | Portfolio',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    }
  }
})