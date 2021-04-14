import React, { useState } from "react";
import './css/contact.css'
import Mymsg from './data/Mymsg'
import emailjs from 'emailjs-com';
const Contact= () => {
  const [data,setData]=useState({
    name:'',
    email:'',
    contact:'',
    message:''


  });
  function formSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('service_vfe06vf', 'template_b9he56w', e.target, 'user_oOV1a7iYTlX8uYLfNDBHf')
      .then((result) => {
          console.log(result.text);
        alert("your message is sent to saumya")
      }, (error) => {
        alert("Error while sending mail . Please try again later")
          console.log(error.text);
      });
  }

  // const InputEvent=(event)=>{
  //   const {name,value}=event.target;
  //   setData((preVal)=>{
  //     return{
  //       ...preVal,
  //       [name]:value,
  //     }
  //   })
  // }
  return(
    <>
    <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : +91-8210129728</div>
        </div>
        <div class="screen-body-item">
          <form onSubmit={formSubmit}>
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" name="name" placeholder="NAME" required/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" name="email" placeholder="EMAIL" required/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" name="contact" placeholder="CONTACT NO" required/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" name="message" placeholder="MESSAGE" required/>
            </div>
            <div class="app-form-group buttons">
            
              <br></br>
              <button type="submit" class="app-form-button btn btn-secondary">SEND</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  
  </div>
</div>

    </>
  );
};
export default Contact;