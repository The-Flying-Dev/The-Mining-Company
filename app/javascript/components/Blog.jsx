import React from 'react'
import { Link } from "react-router-dom";

class Blog extends React.Component{
 render() {
   return (
       <>
         <h1> This is blog page.</h1>
         <Link to="/"> Go To Home </Link>
         <br/>
         <Link to="/about-us"> Go To About Us </Link>
       </>
   )
 }
}
export default Blog