/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01352C',
        'secondary': '#61B390',
        'third-color': '#BAD8B6',
      },
      boxShadow: {
        custom: '0 0 20px hsla(19, 64%, 24%, 0.15)'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif']
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}

