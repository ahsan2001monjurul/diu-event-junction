/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //color scheme 
      colors:{
        'primary':'#560BAD',      //how to use in tailwind : className = 'bg-primary text-light-gray'
        'secondary':'#F72585',
        'off-white':'#F8F9FA',
        'black':'#000000',
        'white':'#FFFFFF',
        'light-gray': '#B9B9B9',
        'deep-gray':'#4F4F4F',
        'gray':'#5F5F5F',
        'red':'#FF6363',
      },

      //font-family          
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'], //how to use in tailwind : className = 'font-poppins'
        'roboto' : ['Roboto', 'sans-serif'],
        'lato' : ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
