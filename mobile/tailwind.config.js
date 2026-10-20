/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Bulgarian flag + cultural palette
        primary: {
          DEFAULT: '#0B3D2E', // deep Bulgarian green
          light: '#146b52',
          dark: '#072a20',
        },
        secondary: {
          DEFAULT: '#D6262B', // flag red
          light: '#f0565a',
          dark: '#a01a1e',
        },
        accent: '#F2C14E', // wheat gold (rose oil / folk motifs)
        flag: {
          white: '#FFFFFF',
          green: '#00966E',
          red: '#D6262B',
        },
        surface: {
          light: '#FAF9F6',
          dark: '#121212',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        pill: '999px',
      },
      fontFamily: {
        regular: 'System',
      },
    },
  },
  plugins: [],
};
