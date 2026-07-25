/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14171F",
          light: "#5B6472",
          faint: "#9AA2B1",
        },
        canvas: {
          DEFAULT: "#F8F9FB",
          card: "#FFFFFF",
          sunken: "#F1F2F6",
        },
        line: {
          DEFAULT: "#E4E7EC",
          strong: "#D2D6DE",
        },
        signal: {
          DEFAULT: "#3D5AFE",
          hover: "#3049E0",
          soft: "#EAEDFF",
        },
        teal: {
          DEFAULT: "#00B49A",
          soft: "#E1F7F2",
        },
        amber: {
          DEFAULT: "#E28A1F",
          soft: "#FBF0DF",
        },
        rose: {
          DEFAULT: "#E14F5A",
          soft: "#FCE9EA",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(20, 23, 31, 0.04), 0 8px 24px -12px rgba(20, 23, 31, 0.10)",
        pop: "0 4px 12px rgba(20, 23, 31, 0.06), 0 16px 40px -16px rgba(61, 90, 254, 0.20)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
