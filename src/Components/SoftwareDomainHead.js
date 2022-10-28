import React from "react";
import Details from "./Details";
import CoordiCss from "./coordinator.module.css";


function SoftwareDivisonHead(props)
{
    return(
        <div>
           <h1 className={CoordiCss.coordinatorsHeading}>Software Division Heads</h1>
            <div className={CoordiCss.coordinators}>
            <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img1}`} alt="softwareHead1"/>
                </div>
                
                <Details
             name={props.name1}
            />
                </div>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img3}`} alt="softwareHead2"/>
                </div>
                
                <Details
             name={props.name2}
            />
                </div>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img2}`} alt="softwareHead3"/>
                </div>
                
                <Details
             name={props.name3}
            />
                </div>
            </div>
        </div>
       
    )
}

export default SoftwareDivisonHead;