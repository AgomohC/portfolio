import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import { Paper, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
   paper: {
      minHeight: "100vh",
      backgroundColor: theme.palette.primary.main,
   },
}));
const Home = () => {
   const classes = useStyles();

   return (
      <Paper component="main" className={classes.paper}>
         <Header />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
      </Paper>
   );
};

export default Home;
