module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors: {
        darkbg : "#1B4242",
        blue: {
          750 : "#527853"
        }
      }
    },
  },
  plugins: [],
}