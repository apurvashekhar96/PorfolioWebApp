/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      80: "80vh",
      60: "60vh",
      100: "100vh",
      25: "25vh",
    },

    colors: {
      primary: "#213440",
      "primary-container": "#8D9EAB",
      "on-primary": "#ffffff",
      secondary: "#3E5461",
      "secondary-container": "#C9D1D8",
      tertiary: "#E23F40",
    },

    extend: {},
  },
  plugins: [],
};

// Primary: #A385CA = rgb(163, 133, 202)
// Secondary: #FDD37E = rgb(253, 211, 126)
// Tertiary: #1A5AA0 = rgb(26, 90, 160
// quaternary: #01316B = rgb(1, 49, 107)
