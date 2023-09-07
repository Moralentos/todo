/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '767px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
