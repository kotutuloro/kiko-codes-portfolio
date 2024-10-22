/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

const customColors = {
  neutral: {
    50: '#FEFEFE',
    900: '#101213',
    950: '#03090A',
  },
  purple: {
    400: '#936BB6',
    900: '#5D1CB7',
  },
  blue: {
    600: '#2460BA',
  },
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        sans: ['"Instrument Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"Jetbrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      borderWidth: {
        '3': '3px',
      },
      dropShadow: {
        'title': `0 4px 4px ${customColors.neutral[50]}50`, // 31.25% opacity
      },
      boxShadow: {
        'section': `0 10px 5px -5px ${customColors.blue[600]}50`, // 31.25% opacity
      },
    },
  },
  plugins: [],
}
