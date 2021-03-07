import React from "react";
import { NavLink } from "react-router-dom";

const Common= (props) => {
  return(
    <>
     <section id="header" className="d-flex align-items-center mt-5">
    <div className="container-fluid nav_bg ">
            <div className='row '>
                <div className=" mx-auto col-md-10">
                <div className='row mb-5 head '>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 ">
                        <h1>{props.head}</h1>

                        <h2 className="my-3"> 
                        {props.name}
                        </h2>
                        <h3>{props.line2}</h3>
                    
                        <div className="mt-3">

                            <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                            </div>
                            <div id="grad"></div>

                    </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img ">
                    <img id="common-img" src={props.imgsrc} className="img-fluid" clt="home img" /></div>


                 </div>

                </div>
            </div>
     </div>
    </section>
    </>
  );
};
export default Common;