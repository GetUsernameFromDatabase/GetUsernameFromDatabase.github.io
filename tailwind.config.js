/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      'roboto-slab': ['Roboto Slab', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FA5252',
        'light-gray': '#F3F6F6',
        'mid-dark': '#1D1D1D',
      },
      backgroundImage: {
        'main-light': "url('./images/bg-light.jpg')",
        'main-dark': "url('./images/bg-dark.jpg')",
      },
    },
  },
  plugins: [],
};
