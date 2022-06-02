import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import About from "../components/About";
import Navbar from "../components/Navbar";
import MainHero from "../components/MainHero";
import Services from "../components/Services";
import ServicesGrid from "../components/ServicesGrid";
import Mine from "../components/Mine";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class App extends React.Component {
 render() {
   return (
     
    <div className="body">
      <Navbar />      
      <MainHero />
      <About />
      <Services />
      <ServicesGrid />
      <Mine />
      <Contact />
      <Footer />
    </div>    
      
   )
 }
}
export default App