import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
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
      //
      labelGrey_dark: "#767992",
      border_dark: "#393A4B",
      veryDarkBlue_dark: "#161722",
      veryDarkDesaturatedBlue_dark: "#25273C",
      lightGrayishBlueDark_dark: "#CACDE8",
      lightGrayishBlueDark_dark_hover: "#E4E5F1",
      darkGrayishBlueDark_dark: "#777A92",
      veryDarkGrayishBlueDark_dark: "#4D5066",
      veryDarkGrayishBlueDark_dark_2: "#393A4C",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      joseSans: ["var(--jose-sans)"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
