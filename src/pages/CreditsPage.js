import React from "react";
import Heading from "../Components/CreditsHeading";
import TeamCss from "./teams.module.css";
import Mentors from "../Components/Mentors";
import Developers from "../Components/Developers";
import Designer from "../Components/Designer";


  const creditsData={
    mentors: [{name:"Kingshuk Ghosh",img:"SoftwareDivisonHead1.png"},{name:"Vaibhav Jaiswal",img:"SoftwareDivisonHead2.png"}],
    developers:[{name:"Gaurav Agrawal",img:"gaurav.png"},{name:"Vishal Kumar",img:"vishal.png"},{name:"Ramsha Iqbal",img:"ramsha.png"}],
    designer:[{name:"Vishal Kumar",img:"vishal.png"}]
  }

function Teams(props)
{
    return (<div className={TeamCss.maindiv}>
        <Heading />
          <div className={TeamCss.hr}></div>
            <Mentors 
            name1={creditsData.mentors[0].name}
            name2={creditsData.mentors[1].name}
            img1={creditsData.mentors[0].img}
            img2={creditsData.mentors[1].img}
            />
            <Developers 
            name1={creditsData.developers[0].name}
            name2={creditsData.developers[1].name}
            name3={creditsData.developers[2].name}
            img1={creditsData.developers[0].img}
            img2={creditsData.developers[2].img}
            img3={creditsData.developers[1].img}
            />
            <Designer 
            name1={creditsData.designer[0].name}
            img1={creditsData.designer[0].img}
            />

    </div>
    );
}

export default Teams;

