import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import {Routes,Route } from 'react-router-dom';
import Blogmain from "./Components/Blogmainpage";
import Homepage from "./Components/Homepage";
import Errorpage from "./Components/Errorpage";
function App() {
  return (
    <>
    <div>
    <Navbar/>
    <Routes>
      
      <Route  path = "/" element={<Homepage/>}/>
      <Route  path = "/blog" element={<Blogmain/>}/>
      <Route  path = "/*" element={<Errorpage/>}/>
      
    </Routes>

    <Footer/>

      </div>
    </>
  );
}

export default App;
