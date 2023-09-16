/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  /* this is where you can define custom styles */
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#EEEFFF",
        muted: "#5B5B5B",
        emphasis: "#032FF2",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [],
};
