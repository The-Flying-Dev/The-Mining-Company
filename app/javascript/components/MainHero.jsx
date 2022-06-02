import React from 'react'
import './MainHero.css'
import Header from 'images/header.jpg'


 


function MainHero() {
  return (
    <div id="parallax" style={{backgroundImage: `url(${Header})`}}>
      <h1>Engineering Today for a Sustainable Tomorrow</h1>        
    </div>
  )
}

export default MainHero