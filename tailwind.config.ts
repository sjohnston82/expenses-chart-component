import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        cyan: "hsl(186, 34%, 60%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        "very-pale-orange": "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        "DM-sans": ["DM Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
