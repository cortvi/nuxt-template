// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    typescript: { shim: false },

    app: {
        rootId: 'app',
        head: {
            bodyAttrs: { class: 't-body' }
        }
    },

    // modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],
/*     i18n: {
        baseUrl: 'https://....com',
        defaultLocale: 'en',
        locales: [{
            code: 'en',
            iso: 'en-US'
        }, {
            code: 'es',
            iso: 'es-ES'
        }]
    }, */
})
