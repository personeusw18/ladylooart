/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Julius Sans One', 'sans-serif'],
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        marqueeLeft: 'marqueeLeft 160s linear infinite',
        marqueeRight: 'marqueeRight 180s linear infinite',
        appear: "appear 1s ease-in-out",
        appearFast: "appear .25s ease-in"
      },
    },
  },
  plugins: [],
};

