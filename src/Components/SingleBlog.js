import React from 'react'
import SBlogCSS from "./SingleBlog.module.css"
import { useParams } from 'react-router-dom'
import Blogdata from "./Blogdata";
import TopBlogdata from "./TopBlogdata"

const SingleBlog = () => {
    let {blogID} = useParams();
    let isTopBlog = false;
    if(blogID==="0"){
        isTopBlog = true;
    }
  return (
    <div className={SBlogCSS.main}>
        <img className={SBlogCSS.mainImage} src={isTopBlog?TopBlogdata[0].url:Blogdata[blogID-1].url} alt=""></img>
        <p className={SBlogCSS.date}>{isTopBlog?TopBlogdata[0].date:Blogdata[blogID-1].date}</p>
        <p className={SBlogCSS.heading}>{isTopBlog?TopBlogdata[0].heading:Blogdata[blogID-1].heading}</p>
        <p className={SBlogCSS.subheading}>{isTopBlog?TopBlogdata[0].subheading:Blogdata[blogID-1].subheading}</p>
    </div>
  )
}

// <p>{isTopBlog?TopBlogdata[0].heading:Blogdata[blogID-1].heading}</p>
// <p>{isTopBlog?TopBlogdata[0].subheading:Blogdata[blogID-1].subheading}</p> 

export default SingleBlog