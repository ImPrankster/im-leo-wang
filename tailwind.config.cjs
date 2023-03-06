/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        warm: "#FFFFFB",
        "warm-dark": "#1c1c1c",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
