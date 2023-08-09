const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      'cyan':colors.cyan,
      'teal':colors.teal
    },
  },
  plugins: [],
}

