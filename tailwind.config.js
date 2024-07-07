/** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");

// const config={
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = withMT(config);

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-bg': 'gradient 15s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(270deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e)',
      },
    },
  },
  plugins: [],
});
