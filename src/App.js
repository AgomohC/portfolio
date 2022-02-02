import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
   return (
      <main>
         <Header />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
      </main>
   );
};

export default App;
