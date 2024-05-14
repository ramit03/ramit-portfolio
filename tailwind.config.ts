import type { Config } from "tailwindcss";

const config: Config = {
  mode:'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        tilt:'tilt 10s infinite linear'
      },
      keyframes: {
      
        tilt:{
          "0%, 50%, 100%": {
            transform:"rotate(0deg)",
          },
          "25%": {
            transform: 'rotate(1deg)',
          },
          "75%":{
            transform: 'rotate(-1deg)',
          },
        }
      },
    colors:{
      "dark":"#062c43",
      "sec":"#054569",
      "ter":"#5591a9",
      "light":"#9ccddc",
      "textcol":"#ced7e0",
    },
    fontFamily: {
      roboto: ['var(--font-roboto)','sans'],
    }
    },
  },
  plugins: [],
};
export default config;
