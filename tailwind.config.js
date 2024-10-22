/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['"Instrument Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"Jetbrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      borderWidth: {
        '3': '3px',
      },
      dropShadow: {
        'title': '0 4px 4px rgba(254, 254, 254, 0.3)',
      },
      boxShadow: {
        'section': '0 10px 5px -5px rgba(36, 96, 186, 0.35)',
      },
    },
  },
  plugins: [],
}
