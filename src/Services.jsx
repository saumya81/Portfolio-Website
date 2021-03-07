import React from "react";
import Card from "./Card";
import CardData from "./data/CardData"
import Otherexp from "./Otherexp"
const Services= () => {
  return(
    <>
   <div className="my-5">
       <h1 className="text-center">My Works </h1>

   </div>
  

   <div classname="container-fluid-mb-5">
       <div className="row">
        <div className="col-10 mx-auto">

        
            <div className="row gy-4">
                {
                    CardData.map((val,ind)=>{
                        return<Card
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        description={val.description}

                        />
                    })
                }
                </div>
                </div>

</div>

</div>
<div className="my-5">
       <h1 className="text-center">Other Experiences </h1>
       <br></br>
       <br></br>

   </div>
<Otherexp/>




    </>
  );
};
export default Services;