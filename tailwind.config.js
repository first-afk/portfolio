/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D1FF",
        secondary: "#BD00FF",
        tertiary: "#00FF94",
      },
      fontFamily: {
        "space-grotesk": '"Space Grotesk", sans-serif',
      },
      fontSize: {
        xsmall: "0.67rem",
        small: "0.87rem",
        medium: "1rem",
        large: "1.25rem",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
      },
    },
  },
  plugins: [],
};
