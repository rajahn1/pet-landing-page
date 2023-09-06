/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "dark-blue": "#A9DEF9",
        "light-blue": "#D9F2FF",
        "light-white": "#F2F2F2",
        "light-brown": "#595067",
        "dark-black": "#050505",
      },
      fontFamily: {
        mono: "var(--font-roboto-mono)",
        rubik_iso: "var(--font-rubik-iso)",
        pt_sans: "var(--font-pt-sans)",
        sansita: "var(--font-sansita)",
      },
    },
  },
  plugins: [],
};
