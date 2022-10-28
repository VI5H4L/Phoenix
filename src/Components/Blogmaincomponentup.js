import blogupcss from "./Blogmaincomponentup.module.css"
export default function Blogmaincomponent(){
    return (
        <>
        <div className={blogupcss.maincontainer}>
            <div className={blogupcss.maincontainerleft} >
            <img className={blogupcss.containerimage} src="images/blog0.jpg" alt="BLOG-IMG" />
            </div>
            <div className={blogupcss.maincontainerright}>
            <p  className={blogupcss.blogdate} >
              25 April 2022
            </p>
            <h2 className={blogupcss.blogheading} >
            Torque ' 22 
            </h2>
            <p className={blogupcss.blogsubheading}>
            The new batch of Y-21 was introduced to the basics of Robotics with the help of Differential Drive Robot. It was followed by Track completion and Robosoccer competitions with the bots that they bulit after the informative introduction.
            </p>
            </div>
        </div>
        </>
    );
}