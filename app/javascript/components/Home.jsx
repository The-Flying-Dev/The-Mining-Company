import React from 'react'
import { Link } from "react-router-dom";

class Home extends React.Component {
 render() {
   return (
       <>
         <h1> This is home page.</h1>
         <Link to="/blog"> Go To Blog </Link>
         <br/>
         <Link to="/about-us"> Go To About Us </Link>
       </>
   )
 }
}
export default Home