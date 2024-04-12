module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#cfd4dc", 500: "#667084", 700: "#475466", 800: "#344053", 900: "#1d2838" },
        white: { A700: "#ffffff" },
        gray: { 50: "#f8f9fb", 900: "#0f1728" },
        red: { 400: "#eb5757", "400_26": "#eb575726" },
        green: { 600: "#27ae60" },
        light_blue: { 800: "#0077b6" },
        indigo: { 50: "#e4e6eb" },
        amber: { 300: "#f2c94c" },
        blue: { 50: "#eaf8ff", 700: "#2a8ec2" },
        teal: { 200: "#80bbda", 300: "#55a4ce" },
      },
      boxShadow: { xs: "0px 1px 2px 0px #101828" },
      fontFamily: { satoshi: "Satoshi", inter: "Inter", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
