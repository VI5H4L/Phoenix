import blogmaincss from "./Blogmainpage.module.css";
import Blogcomponent from "./Blogmaincomponent.js";
import Blogcomponentup from "./Blogmaincomponentup.js";
import Blogdata from "./Blogdata";
export default function Blogmainpage() {
  return (
    <>
      <h1 className={blogmaincss.heading} >Daily Blogs</h1>

      <div className={blogmaincss.item1}>
        <Blogcomponentup />
      </div>

      <div className={blogmaincss.blogcontainer}>
      {Blogdata.map((value)=>(
        <div key= {value.id} className={blogmaincss.item}>
          <Blogcomponent details={value} />
        </div>  
          ))}    
      </div>
    
    </>
  );
}
