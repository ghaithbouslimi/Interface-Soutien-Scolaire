const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {


      fontFamily: {
          'theme-f1': ['"Oswald"', "sans-serif"],
          'theme-f2': ['"Lora"', "serif"],
          'theme-f3': ['"Bebas Kai"', "sans-serif"],
          'theme-f4': ['"Open Sans"', "sans-serif"],
      },
    extend: {
      fontSize: {
        '7xl': '7rem',
    },
      backgroundImage: {
        'coursesadd': "url('./assets/course.jpg')",
        'coachadd' :"url('./assets/add.jpg')"
      
      },
       colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
