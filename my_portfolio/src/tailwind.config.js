// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyan-400': '#00B7EB', // Custom cyan color matching the design
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        'black': '#000000',
        'gray-900': '#111111',
        'gray-800': '#1a1a1a',
      },
    },
  },
  plugins: [],
}