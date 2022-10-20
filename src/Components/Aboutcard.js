import Aboutcss from './Aboutcard.module.css';
export default function Aboutcard() {
    return(
        <>
         <div className={Aboutcss.container}>
            <img className={Aboutcss.aboutimage} src="/images/BLOG-IMG.png" alt="About-image" />
         </div>
        </>
    );
}