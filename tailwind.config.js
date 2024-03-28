/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#DB4444",
        gray: "#F5F5F5",
        "b-color": "#c4c4c4",
        "bg-color": "#f0f0f0",
      },
    },
  },
  plugins: [],
};
