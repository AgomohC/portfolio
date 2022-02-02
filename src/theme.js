import { createTheme } from "@material-ui/core";

const theme = createTheme({
   typography: {
      fontFamily: ["Lato", "Helvetica", "Arial", "sans-serif"].join(","),
      h1: {
         fontFamily: ["Comforter", "cursive"].join(","),
         fontSize: "1.6rem",
         letterSpacing: 4,
      },
      h2: {
         fontFamily: ["Dosis", "sans-serif"].join(","),
      },
      h3: {
         fontFamily: ["Dosis", "sans-serif"].join(","),
      },
      h4: {
         fontFamily: ["Dosis", "sans-serif"].join(","),
      },
      h5: {
         fontFamily: ["Dosis", "sans-serif"].join(","),
      },
      h6: {
         fontFamily: ["Dosis", "sans-serif"].join(","),
      },
   },
   palette: {
      text: {
         primary: "#ffffff",
         secondary: "#0a192f",
      },
      primary: {
         main: "#0a192f",
      },
      secondary: {
         main: "#64ffda",
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 576,
         md: 768,
         lg: 1124,
         xl: 1440,
      },
   },
});

export default theme;
