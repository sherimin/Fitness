/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cream-20": "#FAF0E4",
        "cream-50": "#F6E4CE",
        "cream-100": "#EECCA3",
        "cream-500": "#D88B2E",
        "primary-100": "#7E6363",
        "primary-300": "#503C3C",
        "primary-500": "#3E3232",
        "secondary-400": "#3A8891",
        "secondary-500": "#0E5E6F",
      },
      backgroundImage: (theme) => ({
        "gradient-pinkorange":
          "linear-gradient(90deg, #ECB159 0%, #FF8911 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      content: {
        evolvetext: "url(./assets/EvolveText.png",
        abstractwaves: "url(./assets/AbstractWaves.png",
        sparkles: "url(./assets/Sparkles.png",
        circles: "url(./assets/Circles.png",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
