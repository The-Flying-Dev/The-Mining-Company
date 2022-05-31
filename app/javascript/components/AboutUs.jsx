import React from 'react'
import { Link } from "react-router-dom";

class AboutUs extends React.Component{
 render() {
   return (
       <>
         <h1> This is about us page.</h1>
         <Link to="/blog"> Go To Blog </Link>
         <br/>
         <Link to="/"> Go To Home </Link>
       </>
   )
 }
}

export default AboutUs