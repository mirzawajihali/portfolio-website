/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          500: '#4F6BFF', // Adjust this color to match the blue in the design
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#131313",
          "base-200": "#1e1e1e",
          "base-300": "#000000",
        },
      },
    ],
    darkTheme: "dark",
  },
} 