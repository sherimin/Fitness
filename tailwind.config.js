/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "berry-20": "FFE7E7",
        "berry-50": "CAA6A6",
        "berry-100": "B47B84",
        "berry-500": "944E63",
        "primary-100": "7E6363",
        "primany-300": "503C3C",
        "primary-500": "3E3232",
        "secondary-400": "ECB159",
        "secondary-500": "B67352",
      },
      backgroundImage: (theme) => ({
        "gradient-pinkorange": "linear-gradient(90deg, #ECB159 0%, #FF8911 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"]
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
