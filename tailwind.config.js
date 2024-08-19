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
        '3xl': '0px 40px 16px rgba(100,126,154,.01),0px 22px 13px rgba(100,126,154,.05),0px 10px 10px rgba(100,126,154,.09),0px 2px 5px rgba(100,126,154,.1),0px 0px 0px rgba(100,126,154,.1)',
      },
      fontFamily: {
        yekanbakh: ['yekanbakh-fa']
      },
      colors:{
        'products-banner':'linear-gradient(90deg,#064e4b,#062023 64%)',
      }
    },
  },
  plugins: [],
}

