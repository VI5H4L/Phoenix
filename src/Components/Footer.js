import { Link } from "react-router-dom"
import FooterCSS from "./Footer.module.css"

export default function Footer(){
    return (
        <section className={FooterCSS.footer}>
           <div className={FooterCSS.footerup}>
                <div className={FooterCSS.left_section}>
                    <div className={FooterCSS.text_section}>
                       <div className={FooterCSS.left_text}>
                       <Link className={FooterCSS.left_link} to={"/"}><p >Home</p></Link>
                       <Link className={FooterCSS.left_link} to={"/blogs"}><p >Blogs</p></Link>
                       <Link className={FooterCSS.left_link} to={"/projects"}><p >Projects</p></Link>
                       </div>

                       <div className={FooterCSS.right_text}>
                       <Link className={FooterCSS.right_link} to={"/events"}><p >Events</p></Link>
                       <Link className={FooterCSS.right_link} to={"/our_team_y20"}><p >Our Team</p></Link>
                       <Link className={FooterCSS.right_link} to={"/credits"}><p >Credits</p></Link>
                       </div>

                    </div>
                </div>
                <div className={FooterCSS.mid_section}>
                    <div className={FooterCSS.mid2_section}>
                        <img className={FooterCSS.phoenix_logo} src={"./logo.png"}  alt="logo" />
                    
                        <div className={FooterCSS.social_icons}>
                            <a className={FooterCSS.anchor} href="https://www.linkedin.com/company/phoenix-lnmiit/mycompany/"><img className={FooterCSS.social} src={"./linkedin.png"}  alt="logo" /></a>
                            <a className={FooterCSS.anchor} href="https://www.instagram.com/phoenix.lnmiit/"><img className={FooterCSS.social} src={"./instagram.png"}  alt="logo" /></a>
                            <a className={FooterCSS.anchor} href="https://www.facebook.com/phoenix.lnmiit/"><img className={FooterCSS.social} src={"./facebook.png"}  alt="logo" /></a>
                        </div>
                    </div>
                    
                </div>

                <div className={FooterCSS.right_section}>
                    <div className={FooterCSS.sub_section}>
                       <p className={FooterCSS.sub_text}>Subscribe to our Newsletter</p>
                        <div className={FooterCSS.sub_form}>
                            <div className={FooterCSS.sub_input_div}>
                                <input className={FooterCSS.sub_input} type="email" placeholder="xyz@gmail.com"></input>
                            </div>
                            <div className={FooterCSS.sub_button_div}>
                            <a className={FooterCSS.sub_anchor} href="/">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>

           </div>
           <p className={FooterCSS.rights_text}>© 2022 All Rights Reserved. Phoenix ®</p>
        </section>
    );
}