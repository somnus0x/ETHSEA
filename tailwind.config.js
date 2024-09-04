/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  important: true,
  // prefix: undefined,
  theme: {
    fontFamily: {
      dmmono: '"DM Mono"',
      inter: '"Inter"',
    },
    container: {
      padding: {
        DEFAULT: '8px',
        xs: '16px',
        sm: '16px',
        md: '16px',
        lg: '16px',
        xl: '16px',
        '2xl': '16px',
      },
    },
  },
  content: [
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
