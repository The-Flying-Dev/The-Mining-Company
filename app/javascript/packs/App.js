import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";

class App extends React.Component {
 render() {
   return (
       <Router>
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/about-us" element={<AboutUs/>} />
         </Routes>
       </Router>
   )
 }
}
export default App