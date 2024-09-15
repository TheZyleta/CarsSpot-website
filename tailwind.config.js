/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      boxShadow: {
        'light': '0 4px 20px -1px rgba(255, 255, 255, 0.1)',
      },
      spacing: {
        '30': '120px'
      },
      colors: {
        blue: 'rgba(1, 71, 255, 1)',
        veryDarkGray: 'rgba(40,40,40,1)',
        veryLightGray: 'rgba(241,241,241,1)'
      },
      fontFamily: {
        sans: ["Roboto Flex",'sans-serif'],
        roboC: ["Roboto Condensed", 'sans-serif'],
        beba: ["Bebas Neue", 'sans-serif']
      }
    },
  },
  plugins: [],
}

