import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "../components/About";
import Navbar from "../components/Navbar";
import MainHero from "../components/MainHero";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServicesGrid from "../components/ServicesGrid";
import Mine from "../components/Mine";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class App extends React.Component {
 render() {
   return (
    <div className='container' id='main__container'>
      <Navbar />      
     
      <About />
      <Services />
      <ServicesGrid />
     
      <Contact />
      <Footer />
    </div>    
      
   )
 }
}
export default App