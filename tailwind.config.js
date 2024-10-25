/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "image-box": "0px 0px 34px #0000003b",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
      },
    },
  },
  plugins: [],
};
