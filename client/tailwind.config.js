/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderColor: {
        custom: "var(--border-clr)",
      },
      backgroundColor: {
        "card-bg": "var(--card-bg)",
        "btn-bg": "var(--btn-bg)",
        "textA-bg": "var(--textA-color)"
      },
      textColor: {
        "textA-text": "var(--textA-text)"
      },
    },
  },
  plugins: [],
};
