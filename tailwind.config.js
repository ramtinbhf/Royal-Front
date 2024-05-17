/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    container: {
      padding: '3rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {
      boxShadow: {
        'navshadow': '0 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.05)',
      },
      fontFamily:{
        yekanbakh:['yekanbakh-fa']
      }
    },
  },
  plugins: [],
}

