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
        primary: '#A0C49D',
        secondary: '#C4D7B2',
        tertiary: '#E1ECC8',
        base: '#F7FFaa',
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
