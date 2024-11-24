/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px"
    },
    fontFamily: {
      osWald: ["Oswald", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      dmSans: ["DM Sans", "sans-serif"]
    },
    extend: {
      backgroundColor: {
        primaryColor: "var(--primary-color)",
        primaryColorLight: "var(--primary-color-light)",
        secondaryColor: "var(--secondary-color)"
      },
      textColor: {
        primaryColor: "var(--primary-color)",
        secondaryColor: "var(--secondary-color)",
        paragraphColor: "var(--paragraph-color)"
      },
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#ffcc00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717"
      },
      boxShadow: {
        shadowOne: "0px 2px 30px 0px rgba(16, 155, 255, 0.2)"
      },
      keyframes: {
        move: {
          "50%": {
            transform: "translateY(-1rem)"
          }
        }
      },
      animation: {
        movingY: "move 3s linear infinite"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: ".5rem",
          sm: "1.5rem"
        }
      }
    }
  }
};
