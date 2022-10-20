import React , { useState,useEffect } from "react";
import  { Link } from "react-router-dom";
import Navcss from "../Navbar.module.css";
export default function Leftmainpage() {
  const [isActive, setActive] = useState("false");
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
  const handleToggle = () => {
    setActive(!isActive);
  };
  function handleScroll() {
    handleToggle();
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  return (
    <>
      <nav className= { scroll && Navcss.navbar}>
        <ul className={Navcss.nav_list}>
      
          <div className={Navcss.logo}>
          <Link to="/">
            <img src="images/logo2.png" className={Navcss.logo_image} alt="img" />
            </Link>
            </div>
          <div className= {`${Navcss.rightnav}  ${isActive && Navcss.rightnav1}`}>
            <li>
              <Link className={Navcss.hover_underline_animation}  onClick={handleToggle}   to="/">Home</Link>
            </li>
            <li>
              <Link className={Navcss.hover_underline_animation} onClick={handleToggle}   to="/">Our Team</Link>
            </li>
            <li>
              <Link className={Navcss.hover_underline_animation} onClick={handleToggle} to="/">Fests</Link>
            </li>
            <li>
              <Link className={Navcss.hover_underline_animation} onClick={handleToggle} to="/">Events</Link>
            </li>
            <li>
              <Link  className={Navcss.hover_underline_animation} onClick={handleScroll}  >Contacts</Link>
            </li>
            <li>
              <Link className={Navcss.hover_underline_animation} onClick={handleToggle}  to="/">Projects</Link>
            </li>
            <li>
              <Link  className={Navcss.hover_underline_animation} to="/blog" onClick={handleToggle}>Blogs</Link>
            </li>
          </div>
        
        </ul>
        <div className={Navcss.burger}  onClick={handleToggle}>
            <div className={Navcss.line}></div>
            <div className={Navcss.line}></div>
            <div className={Navcss.line}></div>
          </div>
      </nav>
    </>
  );
}
