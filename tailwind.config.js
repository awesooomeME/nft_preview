/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      soft_blue : 'hsl(215, 51%, 70%)',
      cyan : 'hsl(178, 100%, 50%)',
      very_dark_blue_bg : 'hsl(217, 54%, 11%)',
      very_dark_blue_card : 'hsl(216, 50%, 16%)',
      very_dark_blue_line : 'hsl(215, 32%, 27%)',
      white : 'hsl(0, 0%, 100%)'
    },
  },
  plugins: [],
}
