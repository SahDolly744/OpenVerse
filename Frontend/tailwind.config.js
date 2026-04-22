/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primaryBg: "var(--bg-primary)",
        primaryText: "var(--text-primary)",
        card: "var(--card-bg)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
}