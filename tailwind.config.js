/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Cascadia Mono,Fira Code, monospace",
    },
    extend: {
        height:{
            screen:'100dvh'
        }
    },
  },
  plugins: [],
};
