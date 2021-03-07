import React from "react";
import { NavLink } from "react-router-dom";
import ai from "./img/aiesec.jpeg"
import music from "./img/music.png"
import wcd from "./img/wcd.jpeg"
import Common from "./common"
const Otherexp= () => {
  return(
    <>
 <Common 
 head="Team leader Of Operation in AIESEC in Jalandhar"
 name="AIESEC is the world's largest youth running organisation which is operating in more that 120+ country in the world. I have worked as a team leader of operation in AIESEC in jalandhar for 1 year and taken many leadership roles in many events organised by AIESEC" 
                            imgsrc={ai} visit="/contact"
                            btn="Know More"
                          
                            />


<br/><br/><br/>
<Common 
 head="Indian Classical Music"
                          imgsrc={music} visit="/contact"
                          name="I have done senior diploma in indian classical music from prayag sangeetalaya sameeti allahabad" 
                            btn="Know More"
                            /><br/><br/><br/>
                            <Common 
 head="Vice-President of deligation Service"
                          imgsrc={wcd} visit="/contact"
                          name="I have been the vice-president of delegation service of world cleanup day event organised by AIESEC in Jalandhar" 
                            btn="Know More"
                            />
    
    </>

    
  );
};
export default Otherexp;