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
        clr1: '#B3C8CF',
        clr2: '#BED7DC',
        clr3: '#49108B',
        clrr1: '#E5DDC5',
        clrr2: '#F1EEDC',
      },
      fontFamily: {
        PlusSans: ['Plus Jakarta Sans', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
        BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
        Cinzel: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
