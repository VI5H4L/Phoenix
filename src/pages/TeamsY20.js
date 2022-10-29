import React from "react";
import Heading from "../Components/Heading";
import TeamCss from "./teams.module.css";
import TeamNavbar from "../Components/TeamNavbar";
import Coordinator from "../Components/coordinators";
import HardwareDivisonHead from "../Components/HardwareDivisonHead";
import SoftwareDivisonHead from "../Components/SoftwareDomainHead";
import QuarksDivisonHead from "../Components/QuarksDivisonHead";


  const y20Data={
    coordinators: [{name:"Prajwal Chittora",img:"coordinator1.png",link1:"https://www.linkedin.com/feed/"},{name:"Lakshay Setia",img:"coordinator2.png"}],
    hardware:[{name:"Lakshya Choudhary",img:"HardwareDivisonHead1.png"},{name:"Prabhav Sharma",img:"HardwareDivisonHead2.png"}],
    software:[{name:"Kingshuk Ghosh",img:"SoftwareDivisonHead1.png"},{name:"Swatantra Jain",img:"SoftwareDivisonHead2.png"},{name:"Vaibhav Jaiswal",img:"SoftwareDivisonHead3.png"}],
    quarks:[{name:"Yash Pachauri",img:"QuarksDivisonHead1.png"},{name:"Bhavika Agarwal",img:"QuarksDivisonHead2.png"},{name:"Rajat Bothra",img:"QuarksDivisonHead3.png"}]
  }

function Teams(props)
{
    return (<div className={TeamCss.maindiv}>
        <Heading />
        <TeamNavbar isY20={props.isY20} setY20false={()=>props.setY20false()} setY20true={()=>props.setY20true()} />
        <div className={TeamCss.mainImage}><img className={TeamCss.mainImage1} src={"images/y20_new.jpg"} alt="main"/></div>
           
            <Coordinator 
            name1={y20Data.coordinators[0].name}
            name2={y20Data.coordinators[1].name}
            img1={y20Data.coordinators[0].img}
            img2={y20Data.coordinators[1].img}
            link1={y20Data.coordinators[0].img}
            />
            <HardwareDivisonHead 
            name1={y20Data.hardware[0].name}
            name2={y20Data.hardware[1].name}
            img1={y20Data.hardware[0].img}
            img2={y20Data.hardware[1].img}
            />
            <SoftwareDivisonHead 
            name1={y20Data.software[0].name}
            name2={y20Data.software[1].name}
            name3={y20Data.software[2].name}
            img1={y20Data.software[0].img}
            img2={y20Data.software[1].img}
            img3={y20Data.software[2].img}
            />
            <QuarksDivisonHead 
            name1={y20Data.quarks[0].name}
            name2={y20Data.quarks[1].name}
            name3={y20Data.quarks[2].name}
            img1={y20Data.quarks[0].img}
            img2={y20Data.quarks[1].img}
            img3={y20Data.quarks[2].img}
            />

    </div>
    );
}

export default Teams;

