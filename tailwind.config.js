/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Cadastramos os Keyframes (os quadros da animação)
      keyframes: {
        'pulse-gold-premium': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.6)' },
          '70%': { transform: 'scale(1.05)', boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)' },
        },
        'pulse-shadow-gold': {
          '0%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.5), 0 10px 20px rgba(0,0,0,0.5)' },
          '70%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0), 0 10px 20px rgba(0,0,0,0.5)' },
          '100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0), 0 10px 20px rgba(0,0,0,0.5)' },
        },
        'sweepContinuous': {
          '0%': { transform: 'translateX(-250%) skewX(-30deg)' },
          '30%, 100%': { transform: 'translateX(250%) skewX(-30deg)' },
        }
      },
      // 2. Criamos as classes de animação (que vão virar animate-wpp-ouro, etc)
      animation: {
        'wpp-ouro': 'pulse-gold-premium 2s infinite ease-in-out',
        'shadow-gold': 'pulse-shadow-gold 2s infinite ease-in-out',
        'sweep': 'sweepContinuous 5s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}