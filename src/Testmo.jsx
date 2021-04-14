import React from "react";

import './css/testmo.css';

const Testmo= (props) => {
  return(
    <>
       <div class="col-4 col-md-3">
  <figure class="snip1192">
  <blockquote>{props.line}</blockquote>
  <div class="author">
    <img src={props.imgsrc} alt="sq-sample1"/>
    <p id="text"><i>{props.name1} <br></br><span> {props.desig}</span></i></p>
  </div>
</figure>
</div>
 
    </>
  );
};
export default Testmo;