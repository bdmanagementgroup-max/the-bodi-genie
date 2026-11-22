/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F4ECD8',
          300: '#E9DAB9',
          400: '#DEC293',
          500: '#CFA868',
          600: '#B88F4C',
          700: '#946E37',
          800: '#75552E',
          900: '#5F4427',
        },
        obsidian: {
          950: '#070809',
          900: '#0C0E12',
          850: '#12151B',
          800: '#1A1E26',
          700: '#262C38',
        },
        pearl: {
          50: '#FAFAFA',
          100: '#F5F5F7',
          200: '#EBECEF',
          300: '#DCDFE4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
