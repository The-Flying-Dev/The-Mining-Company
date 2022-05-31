import React from 'react'
import './Contact.css'

 


function Contact() {
  return (
    <div className="contact" id="contact"> 

      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.881319200985!2d-74.00151372674895!3d40.69730452928296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc889234bc07c42ee!2sBrooklyn+Heights%2C+Brooklyn%2C+NY+11201!5e0!3m2!1sen!2sus!4v1461598289488" 
        width={425} height={425} frameBorder={0} style={{border: 0}} allowFullScreen></iframe>
      </div>
        
      <div id="form">
        <h3>Contact Us</h3>
        <form className="cf">              
          <input type="text" id="input__name" placeholder="Name" name = "Name"  required /> <br/>
          <input type="email" id="input__email" placeholder="Email address" name = "Email" required /><br/>
          <input type="text" id="input__subject" placeholder="Subject" required />   
          <textarea name="message" type="text" id="input__message" placeholder="Message" required />  
          <input type="submit" value="Submit" id="input__submit" />            
        </form>    
      </div>
   </div>
  )
}

export default Contact