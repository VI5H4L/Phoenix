import React from "react";
import CoordiCss from "./coordinator.module.css";
import Details from "./Details";


function HardwareDivisonHead(props)
{
    return(
        <div>
        <h1 className={CoordiCss.coordinatorsHeading}>Hardware Division Heads</h1>
            <div className={CoordiCss.coordinators}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img1}`} alt="hardwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
            />
                </div>

                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img2}`} alt="hardwareHead2"/>
                </div>
                
                <Details
             name={props.name2}
            />
                </div>
        </div>
        </div>
    )
}

export default HardwareDivisonHead;