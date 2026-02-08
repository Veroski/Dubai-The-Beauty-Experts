/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        warmWhite: "var(--warm-white)",
        softIvory: "var(--soft-ivory)",
        desertSand: "var(--desert-sand)",
        goldenBeige: "#E6D3A3",
        deepGold: "#B89B5E",
        luxurySand: "#F4E7C6",
        clearSkyBlue: "var(--clear-sky-blue)",
        softBlueTop: "var(--soft-blue-top)",
        deepPetrol: "#0A1A1F",
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #E6D3A3, #B89B5E)',
        'sky-gradient': 'linear-gradient(to bottom, #0F2027, #203A43, #2c5364)',
        'desert-fade': "var(--desert-fade-gradient)",
        'luxury-overlay': "var(--luxury-overlay-gradient)",
        'gold-light': "var(--subtle-gold-light-gradient)",
      },
    },
  },
  plugins: [],
};
