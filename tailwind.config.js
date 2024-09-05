/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "index.html"],
  theme: {
    extend: {
      fontSize : {
        "xlg" : "2rem"
      },
      width : {
        "100" : "400px",
        "104" : "416px",
        "108" : "432px",
        "112" : "448px",
        "116" : "464px"
      }
    },
  },
  plugins: [],
}

