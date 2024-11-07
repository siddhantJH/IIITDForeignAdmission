/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#55AD9B',
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "slide-in-left-first": "slideInLeft 1.2s ease-out forwards",
        "slide-in-right-first": "slideInRight 1.2s ease-out forwards",
        "slide-in-left-second": "slideInLeft 1.2s ease-out 1.5s forwards", // Delay for the second div
        "slide-in-right-second": "slideInRight 1.2s ease-out 1.5s forwards", // Delay for the second div
      },
    },
  },
  plugins: [],
}
