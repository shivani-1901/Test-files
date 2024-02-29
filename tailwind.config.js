/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#0d0d0d",
          "200": "rgba(255, 255, 255, 0.32)",
        },
        white: "#fff",
        whitesmoke: "#efefef",
        "gray-6": "#f2f2f2",
        "gray-3": "#828282",
        hotpink: "#ff67c7",
        yellow: "#e5fe40",
        gainsboro: {
          "100": "rgba(230, 230, 230, 0.32)",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        "gray-5": "#e0e0e0",
        coral: "#ff8d60",
        lightgray: {
          "100": "#d2d2d2",
          "200": "#d1cfcf",
        },
        mediumorchid: "#b674f6",
        blueviolet: "#7c4dff",
        dimgray: "#4f4f4f",
        mediumspringgreen: "#3bffad",
        mediumslateblue: "#8961fb",
        silver: "#bcbcbc",
      },
      spacing: {},
      fontFamily: {
        "helvetica-now-text-": "'Helvetica Now Text '",
        "scto-grotesk-a": "'Scto Grotesk A'",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "83xl": "102px",
      "12xl": "31px",
      "32xl": "51px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      "77xl": "96px",
      "10xl": "29px",
      "29xl": "48px",
      "17xl": "36px",
      "3xl": "22px",
      "89xl": "108px",
      "13xl": "32px",
      "35xl": "54px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
