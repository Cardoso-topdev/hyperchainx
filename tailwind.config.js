/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
        "dark-grey": "#202020",
        "electric-lime": "#a3ff12",
        "light-grey": "#8f8f8f",
        "dark": '#161616',
      },
      lineHeight: {
        "super-tight": 1.1,
        "very-tight": 1.2,
        "extra-tight": 1.33,
        "specific-tight": 1.38,
        "tight": 1.5,
        'broad': 1.67
      },
      backgroundImage: {
        'nft-bk-img': "url('/splash_nft.png')",
        'project-bk-img': "url('/splash_project.png')",
        'gaming-bk-img': "url('/splash_gaming.png')",
      },
      animation: {
        'overlay-fadein': "fadeIn .3s ease-in-out"
      },
      letterSpacing: {
        "extra-wide": '1.67px',
        "semi-wide": '1.33px',
        "minor-wide": '1px',
        "wide": '1.25px'
      }
    },
  },
  plugins: [],
};
