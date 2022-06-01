import React from 'react'
import './ServicesGrid.css'
import Coal from 'images/coalMachine.jpg'
import Rig from 'images/rig.jpg'
import Number from 'images/11.jpg'
import Electric from 'images/electric2.jpg'
import Tunnel from 'images/tunnel.jpg'
import Space from 'images/spacemining.jpg'
import Ancient from 'images/ancient1.jpg'
import Golf from 'images/golf.jpg'

 


function ServicesGrid() {
  return (
    <div id="services-grid">

      <div className="column">                     
          <img src={Coal} className="img" style={{"width" : "100%"}} />  
          <img src={Rig} className="img" style={{"width" : "100%" }} />              
      </div>       
      

      <div className="column">            
          <img src={Number} className="img" style={{"width" : "100%"}} />  
          <img src={Electric} className="img" style={{"width" : "100%"}} />           
      </div>


      <div className="column">
          <img src={Tunnel} className="img" style={{"width" : "100%"}} /> 
          <img src={Space} className="img" style={{"width" : "100%"}} />  
      </div>


      <div className="column">
          <img src={Ancient} className="img" style={{"width" : "100%"}} /> 
          <img src={Golf} className="img" style={{"width" : "100%"}} />    
      </div>
    
    </div>
  )
}

export default ServicesGrid