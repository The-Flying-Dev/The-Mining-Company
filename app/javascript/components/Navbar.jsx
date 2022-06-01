import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div id="navbar" className="header">
		  <p className="logo"><a href="#">The Mining Co.</a></p>
      <ul className="main-nav">
        <li><a href="#parallax">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> 
	  </div>
  )
}

export default Navbar


