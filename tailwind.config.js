/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        login: "#2F80ED",
        black: "#181818",
        blue1: "#2F80ED",
        gray2: "#4F4F4F",
        gray3: "#EBEBEB",
        gray4: "#828282",
        gray5: "#E0E0E0",
        gray6: "#F2F2F2",
        warning: "#FCEFCA",
        Red: "#EB5757",
        green1: "#219653",
      },
    },
  },
  plugins: [],
};
