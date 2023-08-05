/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins:[require("daisyui")],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["var(--font-signika)"]
      }
    },
  },
  daisyui: {
    themes: ["cupcake", "night"]
  },
}
