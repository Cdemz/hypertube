/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx', // Adjust according to your project structure
  ],
};
