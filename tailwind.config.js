/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
