/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B3C8CF',
        secondary: '#BED7DC',
        tertiary: '#49108B',
        base: '#E5DDC5',
        base00: '#F1EEDC',
      },
      fontFamily: {
        PlusSans: ['Plus Jakarta Sans', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
