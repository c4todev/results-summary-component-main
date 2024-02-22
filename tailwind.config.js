/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
    },
    extend: {
      colors: {
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        white: "hsl(0, 0%, 100%)",
        "p-white": "hsla(0, 0%, 100%, 0.8)",
        "p-white-secondary": "hsla(0, 0%, 100%, 0.5)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(224, 30%, 27%)",
      },
      backgroundColor: {
        btn: "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"'],
      },
    },
  },
  plugins: [],
};
