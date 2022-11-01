import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navcss from "../Navbar.module.css";
export default function Navbar(props) {
  const [isActive, setActive] = useState(false);

  const [isCheck, setIsCheck] = useState(false);

  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  const [isActive6, setActive6] = useState(false);
  const [isActive7, setActive7] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  const handleToggle = () => {
    if(isActive){
      setActive(!isActive);
      setTimeout(()=>{setIsCheck(false)}, 100);
      return;
    }
    else{
      setIsCheck(true);
      setTimeout(()=>{setActive(!isActive);}, 100);
      
      
      return;
    }
    
  };
  const handleToggle1 = () => {

    setActive(!isActive);
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle2 = () => {
    setActive(!isActive);
    setActive2(true);
    setActive1(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle3 = () => {
    setActive(!isActive);
    setActive3(true);
    setActive1(false);
    setActive2(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle4 = () => {
    setActive(!isActive);
    setActive4(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive5(false);
    setActive6(false);
    setActive7(false);
  };
  const handleToggle5 = () => {
    setActive(!isActive);
    setActive5(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);

    setActive6(false);
    setActive7(false);
  };
  const handleToggle6 = () => {
    setActive(!isActive);
    setActive6(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);

    setActive7(false);
  };
  const handleToggle7 = () => {
    setActive(!isActive);
    setActive7(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
    setActive6(false);
  };

  const gotoTop = ()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  }

  function handleScroll() {
    handleToggle5();
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }


  props.Test1(isActive);
  props.Test2(handleToggle);
  // if(props.Disable && isActive){
  //   handleToggle();
  // }

  return (
    <>
      <nav className={scroll && Navcss.navbar}>
        <ul className={Navcss.nav_list}>
          <div className={Navcss.logo}>
            <Link onClick={()=>{
                  handleToggle1(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/">
              <img
                src="images/logo2.png"
                className={Navcss.logo_image}
                alt="img"
              />
            </Link>
          </div>
          
          <div className={`${Navcss.rightnav} ${!isActive && Navcss.rightnav1} ${!isCheck && Navcss.barNotActive}`} >
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive1 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle1(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive2 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle2(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/our_team_y20"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive3 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle3(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/fests"
              >
                Fests
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive4 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle4(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/events"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive5 && Navcss.clickactive
                } `}
                onClick={handleScroll}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive6 && Navcss.clickactive
                } `}
                onClick={()=>{
                  handleToggle6(); 
                  handleToggle();
                  gotoTop();
                }}
                to="/credits"
              >
                Credits
              </Link>
            </li>
            <li>
              <Link
                className={`${Navcss.hover_underline_animation} ${
                  isActive7 && Navcss.clickactive
                } `}
                to="/blogs"
                onClick={()=>{
                  handleToggle7(); 
                  handleToggle();
                  gotoTop();
                }}
              >
                Blogs
              </Link>
            </li>
          </div>
        </ul>
        <div className={Navcss.burger} onClick={handleToggle}>
          <div className={Navcss.line}></div>
          <div className={Navcss.line}></div>
          <div className={Navcss.line}></div>
        </div>
      </nav>
    </>
  );
}
