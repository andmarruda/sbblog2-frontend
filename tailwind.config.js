/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './components/*.vue',
    './pages/*.vue',
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
      }
    },
  },
  plugins: [],
}

