import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gantari', 'Avenir', ...defaultTheme.fontFamily.sans],
        serif: ['pt-serif', ...defaultTheme.fontFamily.serif],
        display: ['Bungee Shade', ...defaultTheme.fontFamily.mono],
        mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
