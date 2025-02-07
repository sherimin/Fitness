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
        "primary-50": "#A49191",
        "primary-100": "#7E6363",
        "primary-300": "#644F4F",
        "primary-500": "#503C3C",
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
        icoachtext: "url('./assets/iCoachText.png')",
        blockarrows: "url('./assets/arrow.png')",
        arrow: "url('./assets/arrowpic.png')",
        earth: "url('./assets/earth.png')",
        heartline: "url('./assets/heartline.png')",
      },
    },
    screens: {
      xxs: "1px",
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
    },
  },
  plugins: [],
};
