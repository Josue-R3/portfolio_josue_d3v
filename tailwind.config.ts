import type { Config } from "tailwindcss";

const {nextui} =require("@nextui-org/react")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //background: '#12131C',
        //background: "#1C2120",
        //background: '#212121',
        background: '#0F1214',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
