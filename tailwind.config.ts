import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './store/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f6f0e8',
        cream: '#f4ede3',
        walnut: '#3f2d24',
        champagne: '#d8b98f',
        forest: '#213328',
        saffron: '#d28a42',
        charcoal: '#1c1a18',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(24, 20, 18, 0.12)',
        panel: '0 24px 60px rgba(24, 20, 18, 0.08)',
      },
      backgroundImage: {
        ivory: 'linear-gradient(180deg, rgba(246,240,232,1) 0%, rgba(244,237,226,1) 100%)',
      },
      letterSpacing: {
        widest: '.24em',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
