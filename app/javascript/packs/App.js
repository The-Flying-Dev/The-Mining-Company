import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class App extends React.Component {
 render() {
   return (
    <div className='container' id='main__container'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
       /*<Router>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/about-us" element={<AboutUs/>} />
         </Routes>
         </Router>*/
         
       
      
   )
 }
}
export default App