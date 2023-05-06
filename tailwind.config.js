/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        borderColor: "#3c4144",
        borderColorActive: "#788287",
        semiTransparantDark: "rgba(0, 0, 0, 0.8)"
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
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
}

