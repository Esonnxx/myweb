/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#000000',
        'selected-text': '#ffb703',
        'secondary': '#ffb703',
        'nav': '#002651',
        'input-border': '#28c7fa',
        'input': '#775ada',
      },
    },
  },
  plugins: [],
}