/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        skysoft: '#AEE8FF',
        mintsoft: '#BDF7C8',
        sunsoft: '#FFE36E',
        creamsand: '#FFEBC2',
        coralsoft: '#FF684F',
        lavendersoft: '#D8B7FF',
        pinksoft: '#FFB6D6',
        orangesoft: '#FFB04D',
        brownsoft: '#7A4A28',
        ink: '#161826',
      },
      fontFamily: {
        display: ['Nunito', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 20px 55px rgba(22, 24, 38, 0.14)',
        glow: '0 22px 55px rgba(255, 104, 79, 0.32)',
      },
    },
  },
  plugins: [],
};
