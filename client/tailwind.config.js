/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefaf5',
          100: '#d4f4e6',
          500: '#16a34a',
          700: '#15803d',
          900: '#14532d',
        },
        accent: {
          500: '#f59e0b',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
