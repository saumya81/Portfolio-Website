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
    <h5>{props.name1} <span> {props.desig}</span></h5>
  </div>
</figure>
</div>
 
    </>
  );
};
export default Testmo;