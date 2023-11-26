/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // plugins: [require("daisyui")],
  daisyui: {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#6366f1",
            secondary: "#0083ff",
            accent: "#794200",
            neutral: "#1a0815",
            "base-100": "#f9fffd",
            info: "#00bbe2",
            success: "#71c300",
            warning: "#f97316",
            error: "#ef4444",
          },
        },
      ],
    },
  },
};
