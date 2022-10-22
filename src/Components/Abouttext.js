import Textcss from './Text.module.css';
export default function Abouttext(props) {
    return(
        <>
        <div className={Textcss.textmaindiv} >
       <p classname={Textcss.textline} >{props.upper}</p> 
        <br />
       <p classname={Textcss.textline} >{props.lower}</p>
       </div  >
        </>);
    }