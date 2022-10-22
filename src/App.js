import Footer from "./Components/Footer";
import React ,{useState} from "react";
import Navbar from "./Components/Navbar";
import {Routes,Route } from 'react-router-dom';
import Blogmain from "./Components/Blogmainpage";
import Homepage from "./Components/Homepage";
import Errorpage from "./Components/Errorpage";
function App() {
  let [isActive1, SetIsActive1] = useState(false);
  let Test3;

  const Test1 = (isActive) => {
    SetIsActive1(isActive);
  }
  const Test2 = (handleToggle) => {
    Test3=handleToggle;
  }
  const DisableNav = () => {
    if(isActive1){
      Test3();
    }
  }

  return (
    <>
    <div>
    <Navbar Test1={Test1} Test2={Test2} />
    <Routes>
      
      <Route  path = "/" element={<div onClick={DisableNav}><Homepage/></div>}/>
      <Route  path = "/blogs" element={<div onClick={DisableNav}><Blogmain/></div>}/>
      <Route  path = "/*" element={<div onClick={DisableNav}><Errorpage/></div>}/>
      
    </Routes>

    <Footer/>

      </div>
    </>
  );
}

export default App;
