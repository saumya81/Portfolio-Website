import React from "react";
import { NavLink } from "react-router-dom";
import mypic from "./img/my.png"
import Common from "./common"
import Testmo from './Testmo'
import TestData from './data/TestData'
import Myint from "./Myint";
import MyintData from './data/MyintData'


const Home= () => {
  return(
    <>
 <center>   <div class="home">
 <Common 
    head="Hey this is Saumya Shrivastava"
    name="Well I'm an engineering student who has gone through all the phase that a typical engineer student go through but 
                            this doesn't mean I am just another engineering student . Here you'll get to know 
                            how I made myself to stad out of crowd.         
                           
                                                    
                            P.S. : I AM NOT A GEEK " 
                            imgsrc={mypic} visit="/contact"
                            line2="Want to know more about me?"
                            btn="click here buddy"
                            />
                         
                         <br></br>
                       
                         <div className="container-fluid-mb-5 bg-dark">
                         <center><h1 id="underdark">My Skills</h1></center> 
                         <div className='row'>
                         <div className="col-8 mx-auto">
                         {
                    MyintData.map((val,ind)=>{
                        return<Myint
                        key={ind}
                        imgsrc1={val.imgsrc1}
        
                        name2={val.name2}
                      

                        />
                    })
                }</div>
                </div></div>
               
                <br></br>
                <center><h1>What my co-workers says about me </h1></center> <br></br>
                         <div className="container-fluid-mb-5 ">
                         <div className='row'>
                         <div className="col-8 mx-auto">
       
                {
                    TestData.map((val,ind)=>{
                        return<Testmo
                        key={ind}
                        imgsrc={val.imgsrc}
                        line={val.line}
                        name1={val.name1}
                        desig={val.desig}
                        company={val.company}

                        />
                    })
                }
                
                </div>
</div>

</div>
                            </div>
                            </center>

                         

      </>                     
  );
};
export default Home;