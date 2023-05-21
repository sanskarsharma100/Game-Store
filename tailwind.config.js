/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        'center': '50% 50%',
      },
      boxShadow: {
        "darker": "inset 0 -15px 0 hsl(0, 0%, 10%)",
        '5xl': '0 -20px 22px 0 hsl(0, 0%,0%)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        "3xl": "0 0 10px hsl(0, 0%, 60%)",
        "4xl": [
          "0 0 5px rgb(255, 0, 0)",
          "0 0 5px rgb(255, 0, 0)",
          "0 0 5px rgb(255, 0, 0)",
        ],
      },
      colors: {
        darkBg: "#121212",
        darkBg2: "#1e1e1e",
        cardHover: "hsl(0, 0%, 20%)",
        lightText: "#ffffffde",
        darkHover: "#BB86FC",
        neonPink: "rgb(255, 16, 240)",
        borderColor: "#3c4144",
        borderColorActive: "#788287",
        semiTransparantDark: "rgba(0, 0, 0, 0.8)",
        semiDark: "rgba(0, 0, 0, 0.2)",
        success: '#4CAF50',
        best: '#2E7D32',
        bad: '#FF9800',
        worst: '#C62828',
      },
    },
    fontFamily: {
      heading: ["Roboto", "sans-serif"],
      text: ["Ubuntu", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
