import blogmaincss from "./Blogmainpage.module.css";
import Blogcomponent from "./Blogmaincomponent.js";
import Blogcomponentup from "./Blogmaincomponentup.js";
import Blogdata from "./Blogdata";
import { Link } from "react-router-dom";
export default function Blogmainpage() {
  return (
    <>
      <h1 className={blogmaincss.heading} >Daily Blogs</h1>

      <Link to={`0`}>
      <div className={blogmaincss.item1}>
        <Blogcomponentup />
      </div>
      </Link>

      <div className={blogmaincss.blogcontainer}>
      {
        Blogdata.map((value)=>(
        <Link to={`${value.id}`}>
        <div key= {value.id} className={blogmaincss.item}>
          <Blogcomponent details={value} />
        </div>   </Link>
          )
        )
      }    
      </div>
    
    </>
  );
}
