/** @type {import('tailwindcss').Config} */
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
        }
      }
    },
  },
  plugins: [],
}
