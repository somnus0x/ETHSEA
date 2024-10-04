/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  // important: true,
  // prefix: undefined,
  theme: {
    fontFamily: {
      workSans: '"Work Sans"',
    },
    screens: {
      // DEFAULT: '100%',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      padding: {
        // DEFAULT: '16px',
        xs: '16px',
        sm: '16px',
        md: '16px',
        lg: '16px',
        xl: '16px',
        '2xl': '16px',
      },
      // screens: {
      //   DEFAULT: 'auto',
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
    },
    colors: {
      primary: {
        DEFAULT: '#F99FC9',
      },
      secondary: {
        DEFAULT: '#2CC6BA',
      },
      background: {
        DEFAULT: '#2C40BA',
        secondary: '#FFDDC9',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      yellow: {
        DEFAULT: '#FCE300',
      },
      transparent: {
        DEFAULT: 'transparent',
      },
    },
  },
  content: [
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/forms')],
}
