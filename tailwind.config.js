module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': {
            right: '-100%',
          },
          '100%': {
            right: '32px',
          },
        },
        slideOut: {
          '0%': {
            right: '32px',
          },
          '100%': {
            right: '-100%',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out',
        slideOut: 'slideOut 1.2s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
