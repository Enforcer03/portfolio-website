// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
        fadeUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
          },
        },
        marquee: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-50%)'},
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        'fade-up-delayed': 'fadeUp 1s 0.15s ease-out both',
        marquee: 'marquee 35s linear infinite',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
