import Textcss from './Text.module.css';
export default function Abouttext() {
    return(
        <>
        <div className={Textcss.textmaindiv} >
       <p classname={Textcss.textline} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi minima rerum doloribus <b > Gaurav Agrawal</b> reprehenderit sapiente? Dolorum ducimus <b>Vishal kumar.</b> </p> 
        <br />
       <p classname={Textcss.textline} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi minima rerum doloribus <b>Web-developer</b> in reprehenderit sapiente? <b>Programmer</b>Dolorum ducimus praesentium. </p>
       </div  >
        </>);
    }