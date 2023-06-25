const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#01352C',
        'secondary': '#61B390',
        'secondary-alt': '#53997B',
        'third-color': '#F0F8EF',
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
      md:'1024px',
      'custom-md': '1048px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
})

