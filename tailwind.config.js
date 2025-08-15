export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdebd6',
          200: '#f9d2ac',
          300: '#f5b177',
          400: '#ef8a40',
          500: '#e96c1a',
          600: '#da5210',
          700: '#b53f10',
          800: '#933315',
          900: '#762c14',
        },
        secondary: {
          50: '#1a0b0b',
          100: '#2d1515',
          200: '#4a2626',
          300: '#6b3636',
          400: '#8b4747',
          500: '#a85757',
          600: '#c26868',
          700: '#d97979',
          800: '#ec8b8b',
          900: '#f5a1a1',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern':
          'linear-gradient(135deg, rgba(233, 108, 26, 0.1) 0%, rgba(218, 82, 16, 0.1) 100%)',
      },
    },
  },
  plugins: [],
};
