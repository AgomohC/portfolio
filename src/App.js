import Home from "./Home";
import { createTheme, ThemeProvider } from "@material-ui/core";

const App = () => {
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
         body1: {
            letterSpacing: 1.3,
            lineHeight: 1.5,
         },
         body2: {
            fontSize: "0.75rem",
         },
         subtitle2: {
            letterSpacing: 1.4,
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

   return (
      <ThemeProvider theme={theme}>
         <Home />
      </ThemeProvider>
   );
};

export default App;
