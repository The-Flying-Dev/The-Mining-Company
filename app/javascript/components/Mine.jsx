import React from 'react'
import './Mine.css'
import MinePic from 'images/mine.jpg'
const construction = require('videos/Construction.mp4')



 


function Mine() {
  return (
    <>
     <div id="mine" style={{backgroundImage: `url(${MinePic})`}}>
        
      <h1 id="quote">We don't stop for anything.<br /> <br />"No challenge is too big"</h1>
      </div>

      <div id="parallax__video">
        <h1>"Always Pushing Forward<br />Always Breaking Barriers<br />Always Looking Ahead."</h1>
    
                 
          <video src={construction} autoPlay="true" loop muted className="video" type='video/mp4'/>    
        
      
      </div>
    </>
  )
}

export default Mine