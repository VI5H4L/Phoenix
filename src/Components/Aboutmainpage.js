import Aboutmainpagecss from './Aboutmainpage.module.css';
import Aboutcard from './Aboutcard';
import Abouttext from './Abouttext';
export default function Aboutmainpage() {
    return(
        <>
        <div className= {Aboutmainpagecss.container}>
           
            <div className={Aboutmainpagecss.first}><div>
            <Aboutcard /></div>
            <div className={Aboutmainpagecss.middle}>
            <Aboutcard /></div>
            <div >
            <Aboutcard /></div></div>
            
            <div className={Aboutmainpagecss.text}>
            <Abouttext/></div>
            
        </div>
        </>
    );
}