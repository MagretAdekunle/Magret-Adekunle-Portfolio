import React, { useState } from 'react';
import Style from './Footer.module.scss';
import { Box } from "@mui/material";
import { info } from "../../../info/Info";
import SocialIcon from "./SocialIcon";



const Footer = () => {
    return (
        <footer className={Style.main_footer}>
          <div cclassName={Style.main_container}>
            <div className={Style.main_footer__upper}>
            {/* class="main_footer__row main_footer__row_1" */}
              <div className={Style.main_footer__row}>
              {/* class="heading heading_sm main_footer__heading_sm" */}
                <h2 className={Style.main_footer__heading_sm} >
                  <span>Social</span>
                </h2>
                <div className={Style.main_footer__social_cont}>
                  <a target="_blank" rel="noreferrer" href="#">
                    <img
                      className={Style.main_footer__icon}
                      src="./assets/png/linkedin_ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <img
                      className={Style.main_footer__icon}
                      src="./assets/png/github_ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <img
                      className={Style.main_footer__icon}
                      src="./assets/png/twitter_ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <img
                      className={Style.main_footer__icon}
                      src="./assets/png/yt_ico.png"
                      alt="icon"
                    />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <img
                    // class="main_footer__icon main_footer__icon__mr_none"
                      className={Style.main_footer__icon} 
                      src="./assets/png/insta_ico.png"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
              {/* class="main_footer__row " */}
              <div className={Style.main_footer__row_2}>
              {/* class="heading heading_sm text_lt" */}
                <h4 className={Style.heading} >John Doe</h4>
                <p className={Style.main_footer__short_desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                  tempora explicabo quae quod deserunt
                </p>
              </div>
            </div>
    
            <div className={Style.main_footer__lower}>             
              <p>&copy; Copyright {new Date().getFullYear()}. Made by <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Magret Adekunle.</a>  All Rights Reserved.</p>

            </div>
          </div>
        </footer>
        
        
        // <footer className={Style.footer}>
        //     <div className={Style.footer_top}>
        //     <h2>Magret Adekunle</h2>
        //         <div className={Style.footer_section}>
        //             <h3>Company</h3>
        //             <ul>
        //                 <li><a href="#about">About Us</a></li>
        //                 <li><a href="#careers">Careers</a></li>
        //                 <li><a href="#press">Press</a></li>
        //             </ul>
        //         </div>

        //         <div className={Style.footer_section}>
        //             <h3>Support</h3>
        //             <ul>
        //                 <li><a href="#contact">Contact Us</a></li>
        //                 <li><a href="#faq">FAQ</a></li>
        //                 <li><a href="#shipping">Shipping & Returns</a></li>
        //             </ul>
        //         </div>

        //         <div className={Style.footer_section}>
        //             <h3>SOCIAL</h3>
        //             {/* Social Media Icons */}
        //             <Box  className={Style.social_links} display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '3rem', md: '3.5rem' }} marginBottom={'2rem'}>
        //                 {info.socials.map((social, index) => (
        //                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
        //                 ))}
        //             </Box>
        //             <ul className={Style.social_links}>
        //                 <li><a href="#facebook">Github</a></li>
        //                 <li><a href="#twitter">LinkedIn</a></li>
        //             </ul>
        //         </div>
        //     </div>

        //     <div className={Style.footer_bottom}>
        //         <p>&copy; {new Date().getFullYear()} Magret Adekunle. All Rights Reserved.</p>
        //         {/* <ul>
        //             <li><a href="#privacy">Privacy Policy</a></li>
        //             <li><a href="#terms">Terms of Service</a></li>
        //         </ul> */}
        //     </div>
        // </footer>

        
    );
};
export default Footer;
