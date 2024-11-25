/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#febd78",
        SecondaryColor: "#ed8900",
        DarkColor: "#d4a373",
        ExtraDarkColor: "#a98467",
      },
    },
  },
  plugins: [],
};
