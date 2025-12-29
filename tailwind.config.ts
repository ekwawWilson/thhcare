import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f0f7',
          100: '#ebe1ef',
          200: '#d7c3df',
          300: '#c3a5cf',
          400: '#9b69af',
          500: '#73338f',
          600: '#59017b',
          700: '#4a016a',
          800: '#3b0158',
          900: '#2c0046',
        },
        secondary: {
          50: '#f6fbee',
          100: '#ecf8dd',
          200: '#d9f0bb',
          300: '#c6e999',
          400: '#a0d955',
          500: '#6eb442',
          600: '#5a9536',
          700: '#4b7d2d',
          800: '#3c6424',
          900: '#2d4b1b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
