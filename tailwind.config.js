/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "390px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        xmd: "768px",

        md: "834px",
        // => @media (min-width: 834px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        backing: "#0c0c0c",
        pale: "#e3e3e2",
        dark: "#161616",
        "semi-grey": "#595959",
        "dark-grey": "#202020",
        "electric-lime": "#a3ff12",
        "light-grey": "#8f8f8f",
        "hero-section-avatar": "rgba(163, 255, 18, 0.14)",
        dark: "#161616",
      },
      lineHeight: {
        "super-tight": 1.1,
        "very-tight": 1.2,
        "extra-tight": 1.33,
        "specific-tight": 1.38,
        tight: 1.5,
        broad: 1.67,
      },
      backgroundImage: {
        "nft-bk-img": "url('/splash_nft.png')",
        "project-bk-img": "url('/splash_project.png')",
        "gaming-bk-img": "url('/splash_gaming.png')",
        "gradient-bottom-lime":
          "linear-gradient(to bottom, rgba(12, 12, 12, 0) 31%, #a3ff12 500%)",
      },
      background: {
        "custom-red": "red",
        "pie-bk": "conic-gradient(#a3ff12 calc(90*1%),#0000 0);",
      },
      animation: {
        "overlay-fadein": "fadeIn .3s ease-in-out",
      },
      letterSpacing: {
        "extra-wide": "1.67px",
        "semi-wide": "1.33px",
        "minor-wide": "1px",
        wide: "1.25px",
      },
    },
  },
  plugins: [],
};
