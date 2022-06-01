import React from 'react'
import './MainHero.css'
const corporate = require('videos/Corporate.mp4')


 


function MainHero() {
  return (
    <div id="parallax">
      <h1><pre>Engineering Today
      <br />       for a<br /><br />     Sustainable Tomorrow</pre></h1>

      <div class="background-video">      
        <video src={corporate} autoPlay="true" loop muted className="video" type='video/mp4'/>            
      </div>

    </div>
  )
}

export default MainHero