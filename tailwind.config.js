/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      titillium: ['Titillium Web', "sans-serif"]
    },
    backgroundColor: {
      body: "#F6FCFC",
      primary: "#1FBEF9",
      secondary: "#E2F3FB",
      gray: "#92989A",
      white: "#FFFFFF",
    },
    textColor: {
      primary: "#1FBEF9",
      secondary: "#E2F3FB",
      gray: "#92989A",
      body: "#F6FCFC",
      white: "#FFFFFF",
    },
    borderColor: {
      primary: "#1FBEF9",
    },
    outlineColor: {
      primary: "#1FBEF9",
    },
    ringColor: {
      primary: "#1FBEF9",
    }
  },
  plugins: [require("daisyui")],
}

