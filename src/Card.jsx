import React from "react";
import { NavLink } from "react-router-dom";
import './css/card.css';
const Card= (props) => {
  return(
    <>
 <div className="col-md-3 col-10 mx-auto">
                {/* <div className="card" >
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>  */}


<div id="login-container">
  <div class="profile-img"><img src={props.imgsrc} class="card-img-top" alt="..."/></div>
  <h3>
   {props.title}
  </h3>
  <div class="description">
    <br/>
    {props.description}
    </div>

</div>
</div>         
    </>
  );
};
export default Card;