import React from "react";
import CoordiCss from "./coordinator.module.css";
import Details from "./Details";


function HardwareDivisonHead(props)
{
    return(
        <div>
        <h1 className={CoordiCss.coordinatorsHeading}>Hardware Division Head</h1>
            <div className={CoordiCss.coordinators}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img className={CoordiCss.mainimage} src={`/images/${props.img1}`} alt="hardwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
            />
                </div>
        </div>
        </div>
    )
}

export default HardwareDivisonHead;