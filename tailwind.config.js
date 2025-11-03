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
        "primary": "#FF9933", // Saffron/Marigold for CTA (from Screen 3, overwrites Screen 9)
        "background-light": "#F5F5DC", // Cream/Light Beige (from Screen 3, overwrites Screen 9)
        "background-dark": "#102216", // Retaining a dark theme as base (from Screen 3, overwrites Screen 9)
        "surface-light": "#FFFFFF",
        "surface-dark": "#1a1c19",
        "primary-green": "#A9C2A0", // Soft Crop Green
        "primary-brown": "#8B4513", // Earthy Brown
        "accent-terracotta": "#E07A5F",
        "text-main-light": "#36454F", // Charcoal Grey
        "text-main-dark": "#E1E3DE",
        "text-secondary-light": "#606060",
        "text-secondary-dark": "#A9C2A0",
        "card-bg-light": "#FAF9F6",
        "card-bg-dark": "#193322",
        // from Screen 9
        "kesar-gold": "#FFC107",
        "deep-green": "#2E7D32",
        "lotus-pink": "#EC407A",
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"],
        "headline": ["Rajdhani", "sans-serif"]
      },
    },
  },
  plugins: [],
};
