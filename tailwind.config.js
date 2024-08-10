/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    container: {
      padding: '3rem',
    },
    screens: {
      'sm': '640px',


      'md': '768px',


      'lg': '1024px',


      'xl': '1280px',


    },
    extend: {
      boxShadow: {
        'navshadow': '0 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.05)',
      },
      fontFamily: {
        yekanbakh: ['yekanbakh-fa']
      }
    },
  },
  plugins: [],
}

