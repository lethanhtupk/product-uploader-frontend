module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '100px': '100px',
      },
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
      inset: {
        '7/12': '58.33333333%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
