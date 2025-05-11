/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: '#FFE14D',
          400: '#FFD700', // Adjusted to match the gold/yellow in the image
          500: '#E6C200',
        },
      },
      fontFamily: {
        'anton': ['"Anton"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
