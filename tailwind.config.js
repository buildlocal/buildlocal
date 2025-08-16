/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6fd',
          100: '#e0ecfa',
          200: '#c9def6',
          300: '#a5c9ef',
          400: '#7baee6',
          500: '#3D74B6',
          600: '#356199',
          700: '#2d4d7d',
          800: '#264060',
          900: '#1f3344',
          950: '#151f2a',
        },
        cream: {
          50: '#fefcf8',
          100: '#FBF5DE',
          200: '#f7ebb8',
          300: '#f3e092',
          400: '#efd66c',
          500: '#ebcb46',
          600: '#d4b63e',
          700: '#bd9e36',
          800: '#a6862d',
          900: '#8f6e25',
        },
        beige: {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#EAC8A6',
          300: '#deb285',
          400: '#d29c64',
          500: '#c68643',
          600: '#b1733c',
          700: '#9c6035',
          800: '#864d2e',
          900: '#713a27',
        },
        accent: {
          50: '#fef2f2',
          100: '#fde6e6',
          200: '#fac9c9',
          300: '#f6a5a5',
          400: '#f17a7a',
          500: '#DC3C22',
          600: '#c6351e',
          700: '#b02e1a',
          800: '#9a2716',
          900: '#841f12',
        },
      },
    },
  },
  plugins: [],
};
