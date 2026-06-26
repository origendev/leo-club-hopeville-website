/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leoNavy: {
          DEFAULT: '#0B132B',
          light: '#1C2541',
          dark: '#050A18',
          pale: '#F4F7FC',
        },
        leoTeal: {
          DEFAULT: '#0077B6',
          light: '#48CAE4',
          dark: '#03045E',
          soft: '#E0F2FE',
        },
        leoGold: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
          pale: '#FEF3C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
