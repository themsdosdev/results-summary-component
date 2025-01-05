/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "light-red-alpha": "hsla(0, 100%, 67%, 0.1)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Orangey-yellow-alpha": "hsla(39, 100%, 56%, 0.1)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Green-teal-alpha": "hsla(166, 100%, 37%, 0.1)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "Cobalt-blue-alpha": "hsla(234, 85%, 45%,0.1)",

        "Light-slate-blue": "hsl(252, 100%, 67%)",
        "Light-royal-blue": "hsl(241, 81%, 54%)",

        "Violet-blue-alpha": "hsla(256, 72%, 46%, 1)",
        "Persian-blue-alpha": "hsla(241, 72%, 46%, 0)",

        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
        "Dark-gray-blue-alpha": "hsla(224, 30%, 27%, 0.1)",
       
      },
    },
  },
  plugins: [],
};
