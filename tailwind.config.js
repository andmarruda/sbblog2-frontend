/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/*.vue',
    './pages/*.vue',
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#1d1d1f',
        'secondary': '#86868b',
        'highlight': '#104486',
      },
      backgroundColor: {
        'highlight': '#104486',
      }
    },
  },
  plugins: [],
}
