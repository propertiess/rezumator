/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '740px',
        mini_tablet: '500px',
        phone: '420px',
      },
      colors: {
        main: 'var(--main-color)',
        primary: 'var(--primary-bg-color)',
        secondary: 'var(--secondary-bg-color)',
      },
    },
  },
  plugins: [],
};
