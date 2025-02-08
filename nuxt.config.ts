// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME,
      socialNetworks: [
        {
          name: 'Facebook',
          url: process.env.SOCIAL_FACEBOOK,
          icon: 'facebook',
        },
        {
          name: 'Twitter',
          url: process.env.SOCIAL_TWITTER,
          icon: 'twitter',
        },
        {
          name: 'Instagram',
          url: process.env.SOCIAL_INSTAGRAM,
          icon: 'instagram',
        },
        {
          name: 'LinkedIn',
          url: process.env.SOCIAL_LINKEDIN,
          icon: 'linkedin',
        },
        {
          name: 'YouTube',
          url: process.env.SOCIAL_YOUTUBE,
          icon: 'youtube',
        },
        {
          name: 'GitHub',
          url: process.env.SOCIAL_GITHUB,
          icon: 'github',
        },
        {
          name: 'Telegram',
          url: process.env.SOCIAL_TELEGRAM,
          icon: 'telegram',
        },
        {
          name: 'TikTok',
          url: process.env.SOCIAL_TIKTOK,
          icon: 'tiktok',
        },
      ],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
        },
        {
          title: process.env.APP_NAME,
        }
      ],
      bodyAttrs: {
        class: 'bg-[#eee]',
      }
    },
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
})
