import React from "react";
import Heading from "../Components/CreditsHeading";
import TeamCss from "./teams.module.css";
import Mentors from "../Components/Mentors";
import Developers from "../Components/Developers";
import Designer from "../Components/Designer";


  const creditsData={
    mentors: [{name:"Kingshuk Ghosh",img:"SoftwareDivisonHead1.png"},{name:"Vaibhav Jaiswal",img:"SoftwareDivisonHead2.png"}],
    developers:[{name:"Gaurav Agrawal",img:"gaurav.png"},{name:"Vishal Kumar",img:"vishal1.png"},{name:"Ramsha Iqbal",img:"ramsha.png"}],
    designer:[{name:"Vishal Kumar",img:"vishal1.png",link1:"https://www.linkedin.com/in/vishal-k-b08392122/",link2:"https://www.instagram.com/vishal.kr4004/",link3:"https://www.facebook.com/profile.php?id=100009351615604",link4:"mailto:21ucc116@lnmiit.ac.in"}]
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
            link1={creditsData.designer[0].link1}
            link2={creditsData.designer[0].link2}
            link3={creditsData.designer[0].link3}
            link4={creditsData.designer[0].link4}
            />

    </div>
    );
}

export default Teams;

