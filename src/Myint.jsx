import React from "react";



const Myint= (props) => {
  return(
    <>
  
  <main>
  <div id="test-list">
    <section>
      
      <img src={props.imgsrc1} alt="Picture"/>
      <br/>
      <div class="bottom-box">
      
     
        <div class="test-details">
        
          <br></br> <br></br> <br></br>
          {props.name2}
        </div>
     </div>
    </section>
    
  </div>
  </main>

      </>                     
  );
};
export default Myint;