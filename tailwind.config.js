/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#09090a",
        nightFaded: "#d2d2d2",
        nightHref: "#f7f7f8",
        light: "#f7f7f8",
        lightFaded: "#3f3f3f",
        lightHref: "#98999b",
        orange: "#ff490e",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },

      fontFamily: {
        inter: ["var(--font-inter)", "monospace"],
      },
    },
  },
  plugins: [],
};
