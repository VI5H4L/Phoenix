import React from "react";
import Details from "./Details";
import CoordiCss from "./coordinator.module.css";

function Coordinator(props)
{
   
    return (
        <div className={CoordiCss.coordinatorsdiv}>
        <h1 className={CoordiCss.coordinatorsHeading}>Coordinators</h1>
            <div className={CoordiCss.coordinators}>
                <div className={CoordiCss.container}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img1}`} alt="coordinator1"/>

                </div>                
                <Details
            //  name={coordinators.coordinator[0].name
            name={props.name1}
            link1={props.link1}
            />
                </div>
                </div>
               
                <div className={CoordiCss.container}>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img2}`}  alt="coordinator2"/>
                </div>
                
                <Details
                name={props.name2}
            //  name={coordinators.coordinator[1].name}
            />
            
                </div>
                </div>
                
        </div>
        </div>

    )
}

export default Coordinator;