import React from "react";

import mypic from "./img/2.png"
import Common from "./common"
import EduData from './data/EduData'
import Education from "./Education";
import Myint from './Myint'
import Hobbies from './data/Hobbies'
import './css/index.css'

const About= () => {

  return(
    <>

<Common 
    head="Hey this is Saumya Shrivastava"
    name=" am a computer science engineering student having good knowledge of different domains in computer science . I am a quick learner and always ready to learn different skills . I have a worked with different startups and always open to new projects of my field in order to enhance my skillset." 
                            imgsrc={mypic} visit="/contact"
                            
                            btn="Contact me"
                            />
                         
                         <br></br>
                       
    
   
    <center><h1 >My Education</h1></center> 
    <br></br><br></br><br></br>
   <center>
                     <div className='row'>
                          
                         {
                    EduData.map((val,ind)=>{
                        return<Education
                        key={ind}
                        uni={val.uni}
        
                        marks={val.marks}
                        sub={val.sub}
                        time={val.time}
                      

                        />
                    })
                }
            </div>  
            </center>
                <br></br><br></br><br></br>
                <center><h1>My Hobbies</h1></center> 
                       <center> <div className="container-fluid-mb-5 ">
                         
                         {
                    Hobbies.map((val,ind)=>{
                        return<Myint
                        key={ind}
                        imgsrc1={val.imgsrc1}
        
                        name2={val.name2}
                      

                        />
                    })
                }</div></center> 
    </>
  );
};
export default About;