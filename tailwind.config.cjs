/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                raazDark: "#0E1410",
    raazSection: "#162218",
    raazGold: "#C9A037",
    raazLight: "#E6E6E6",
    raazMuted: "#B0B0B0",
    raazGreen: "#28B463",
        raazMuted: "#bdb6a8",
        raazGreen: "#25D366", // Official WhatsApp green

      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};