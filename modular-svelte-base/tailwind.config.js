/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'base': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.5' }],
        'lg': ['clamp(1.125rem, 2.5vw, 1.25rem)', { lineHeight: '1.4' }],
        'xl': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.3' }],
        '2xl': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.2' }],
        '3xl': ['clamp(2rem, 5vw, 2.5rem)', { lineHeight: '1.1' }],
      },
      minHeight: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};

