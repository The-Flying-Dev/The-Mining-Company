import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div id="navbar" className="header">
		  <p className="logo"><a href="#">The Mining Co.</a></p>
      <ul className="main-nav">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
      </ul> 
	  </div>
  )
}

export default Navbar


