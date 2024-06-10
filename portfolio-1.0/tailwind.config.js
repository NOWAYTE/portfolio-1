module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // Include the new path
  ],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ['CoolveticaRg-Regular', 'sans-serif'],
        helvetica: ['helvetica-neu', 'sans-serif'],
        labelle: ['LaBelleAurore', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
