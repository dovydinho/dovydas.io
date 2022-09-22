module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
