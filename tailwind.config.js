module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        docortheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3d4451",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },


  plugins: [require("daisyui")],
}
