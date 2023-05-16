/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'darkest': '#4abef0',
          'darker' : '#4abef0',
          'dark': '#57cdff',
          'medium': '#75d6ff',
          'light': '#b2e2f8'
        },
        moss: {
          'dark': '#709c33',
          'medium': '#8cba4c',
          'light': '#a6cf6d',
          'lightest': '#afd975'
        },
        'whatsapp': '#25d366',
      }
    },
  },
  plugins: [],
}

