import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import {Routes,Route } from 'react-router-dom';
// import blogmaincomponent from "./Components/Blogmaincomponent";
// import Blogmaincomponentup from "./Components/Blogmaincomponentup";
// import Aboutcard from "./Components/Aboutcard";
// import About from "./Components/About";
import Blogmain from "./Components/Blogmainpage";
// import Abouttext from "./Components/Abouttext";
import Homepage from "./Components/Homepage";
function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Routes>
      
      <Route  path = "/" element={<Homepage/>}/>
      <Route  path = "/blog" element={<Blogmain/>}/>
      
    </Routes>
    <Footer/>
      </div>
    </>
  );
}

export default App;
