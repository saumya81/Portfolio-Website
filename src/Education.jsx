import React from "react";

const Education = (props) => {
    return (
        <>
            <section >
               
                <div className="container-fluid nav_bg gy-5 ">
                    <div className='row '>
                        <div className="col-10 mx-auto edu">

                            <div class="container " i>
                                <div class="row">
                                    <div class="col-sm">
                                       {props.uni}


    </div>
                                    <div class="col-sm">
                                    {props.sub}
                                    <br></br>
                                    {props.marks}
    </div>
                                    <div class="col-sm">
                                        {props.time}
    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


            </section>
        </>
    );
};
export default Education;