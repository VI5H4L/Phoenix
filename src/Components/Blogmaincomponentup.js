import blogupcss from "./Blogmaincomponentup.module.css"
export default function Blogmaincomponent(){
    return (
        <>
        <div className={blogupcss.maincontainer}>
            <div className={blogupcss.maincontainerleft} >
            <img className={blogupcss.containerimage} src="images/BLOG-IMG.PNG" alt="BLOG-IMG" />
            </div>
            <div className={blogupcss.maincontainerright}>
            <p  className={blogupcss.blogdate} >
              21, june 2022
            </p>
            <h2 className={blogupcss.blogheading} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur suscipit eius impedit nostrum eveniet nobis 
            </h2>
            <p className={blogupcss.blogsubheading}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, voluptatibus, magnam dolorum facilis quidem saepe incidunt porro voluptate s
            </p>
            </div>
        </div>
        </>
    );
}