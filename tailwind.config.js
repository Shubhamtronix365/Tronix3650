/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tronix-dark': '#0a0a0a',
        'tronix-primary': '#00f7ff',
        'tronix-secondary': '#8338ec',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { 'text-shadow': '0 0 5px #00f7ff, 0 0 10px #00f7ff, 0 0 20px #00f7ff' },
          '50%': { 'text-shadow': '0 0 10px #00f7ff, 0 0 25px #00f7ff, 0 0 40px #00f7ff' },
        },
        pulseFade: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        pulseFade: 'pulseFade 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
