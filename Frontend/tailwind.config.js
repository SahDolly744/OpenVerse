/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        primaryBg: "var(--bg-primary)",
        primaryText: "var(--text-primary)",
        secondaryText: "var(--text-secondary)",
        card: "var(--card-bg)",
        border: "var(--border)",
        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        error: "var(--error)",
        success: "var(--success)",
        warning: "var(--warning)",
      },
    },
  },
  plugins: [],
}