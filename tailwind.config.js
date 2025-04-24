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
          "base-300": "#d6d3d1",   // Light warm gray (soft borders)
          "base-200": "#f5f5f4",   // Warm off-white (stone/eggshell)
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#131313",   // Restored to original dark gray (not pure black)
          "base-200": "#000000",   // Dark gray for contrast
          "base-300": "#000000",   // Darker gray for contrast
          "neutral": "#2a303c",    // Original neutral color
        },
      },
    ],
    darkTheme: "dark",
  },
}