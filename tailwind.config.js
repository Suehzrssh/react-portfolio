/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',

      'tab': '768px',

      'lap': '1024px',

    },
  },
  plugins: [],
}

