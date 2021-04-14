import React from "react";
import './css/edu.css'

const Education = (props) => {
    return (
        <>
        
        <div class="col-4 md-3">
  <div class="card">
    <h3 class="h-text ht1">{props.sub}</h3>
    <img src={props.uni} alt="img1" id="eduimg" />
    <hr/> 
    <p class="imgtext">
    {props.marks}
    <hr/>
 
    {props.time}
    </p>
  </div>
 
  </div>
        </>
    );
};
export default Education;