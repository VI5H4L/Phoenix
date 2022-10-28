import React from "react";
import { FaLinkedinIn} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
// import {FaEnvelopeOpenText} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import DetailsCss from "./details.module.css";





function Details(props)
{
    return (
       <div className={DetailsCss.detailsdiv}>
        
        <h1 className={DetailsCss.teamname}>{props.name}</h1>
        <div className={DetailsCss.icons}>
            <a href={props.link1}><FaLinkedinIn size={20} className={DetailsCss.iconStyle}/></a>
            <a href={props.link1}><FaInstagram size={20} className={DetailsCss.iconStyle}/></a>
            <a href={props.link1}><FaFacebookF size={18} className={DetailsCss.iconStyle}/></a>
           <a href={props.link1}><FiMail size={20} className={DetailsCss.iconStyle}/></a> 
        </div>
           
      
       </div>
    );
}

export default Details;