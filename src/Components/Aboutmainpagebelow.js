import Aboutmainpagebelowcss from "./Aboutmainpagebelow.module.css";
import Aboutcard from "./Aboutcard";
import Abouttext from "./Abouttext";
export default function Aboutmainpagebelow() {
  return (
    <>
   
        <div className= {Aboutmainpagebelowcss.container}>
           
            <div className={Aboutmainpagebelowcss.first}><div>
            <Aboutcard /></div>
            <div className={Aboutmainpagebelowcss.middle}>
            <Aboutcard /></div>
            <div >
            <Aboutcard /></div></div>
            
            <div className={Aboutmainpagebelowcss.text}>
            <Abouttext/></div>
            
        </div>
        </>
  );
}
