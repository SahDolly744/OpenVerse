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
        primaryBgDark:"#0a2160",
        primaryTextDark: "#EAF2FF",
        secondaryTextDark: "#AFC4E0",
        cardDark: "#123A5A",
        borderDark: "#1E4E73",
        accentDark: "#3B82F6",
        accentHoverDark: "#2563EB",
        errorDark: "#EF4444",
        successDark: "#22C55E",
        warningDark: "#F59E0B",
        


        primaryBg:"#F9FAFB",
        primaryText: "#111827",
        secondaryText: "#4B5563",
        card: "#FFFFFF",
        border: "#E5E7EB",
        accent: "#3B82F6",
        accentHover: "#2563EB",
        error: "#EF4444",
        success: "#22C55E",
        warning: "#F59E0B",
      },
    },
  },
  plugins: [],
}