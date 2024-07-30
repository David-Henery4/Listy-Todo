import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smLap: "57.5em", // 57.5em === 960px
    },
    colors: {
      white: "#ffffff",
      errorRed: "#d92828",
      black: "#000000",
      brightBlue: "#3A7BFD",
      checkBackgroundBottom: "#57DDFF",
      checkBackgroundTop: "#C058F3",
      //
      veryLightGray_light: "#FAFAFA",
      veryLightGrayishBlue_light: "#E4E5F1",
      lightGrayishBlue_light: "#D2D3DB",
      darkGrayishBlue_light: "#9394A5",
      veryDarkGrayishBlue_light: "#484B6A",
      border_light: "#E3E4F1",
      labelGrey_light: "#9495A5",
      todoText_light: "#494C6B",
      todoTextCrossedOut_light: "#D1D2DA",
      //
      todoText_dark: "#C8CBE7",
      todoTextCrossedOut_dark: "#4D5067",
      backgroundBody_dark: "#171823",
      labelGrey_dark: "#767992",
      dragNDropLabel_dark: "#5B5E7E",
      todoBg_dark: "#25273D",
      veryDarkNavy_dark: "#161725",
      border_dark: "#393A4B",
      veryDarkBlue_dark: "#161722",
      veryDarkDesaturatedBlue_dark: "#25273C",
      lightGrayishBlueDark_dark: "#CACDE8",
      lightGrayishBlueDark_dark_hover: "#E4E5F1",
      darkGrayishBlueDark_dark: "#777A92",
      veryDarkGrayishBlueDark_dark: "#4D5066",
      veryDarkGrayishBlueDark_dark_2: "#393A4C",
    },
    fontFamily: {
      joseSans: ["var(--jose-sans)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
