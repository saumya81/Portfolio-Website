import React from "react";

import './css/testmo.css';

const Testmo= (props) => {
  return(
    <>
   
   <main>
  <div id="test-list">
    <section>
      <div class="top-box"></div>
      <img src={props.imgsrc} alt="Picture"/>
      <br/>
      <div class="bottom-box">
       <div class="line">
          <p id="line">{props.line}</p></div><br></br><br></br>
     
        <div class="test-details">
          <p>
          Together we've worked in -{props.company}<br></br>
          <br></br>
          -{props.name1}<br></br>{props.desig}<br></br></p>
        </div>
     </div>
    </section>
    
  </div>
  </main>
 
    </>
  );
};
export default Testmo;