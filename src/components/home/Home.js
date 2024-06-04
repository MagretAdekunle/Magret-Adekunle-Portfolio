import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import PortfolioBlock from "../portfolio/PortfolioBlock.js";
import resume from "../resume.pdf"



export default function Home({ innerRef }) {

   return (
      <>
         <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 100px)'} id={'home'} marginTop={'5rem'}>
            {/* Main Image */}
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'Image of Magert Adekunle'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
               height={{ xs: '35vh', md: '40vh' }}
               borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />

            {/* Main Infomation */}
            <Box >
               <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.fullName}</span>
                  <span> </span>
                  <span className={Style.hand}>✌🏿</span>
               </h1>

               <h2>I'm {info.position}.</h2>

               {/* Emojies */}
               <Box component={'ul'} p={'0.8rem'}>
                  {info.miniBio.map((bio, index) => (
                     <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                  ))}
               </Box>

               {/* Social Media Icons */}
               <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '3rem', md: '3.5rem' }} marginBottom={'2rem'}>
                  {info.socials.map((social, index) => (
                     <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  ))}
               </Box>
            </Box>

         </Box>

         {/* About Me */}
         <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} id={'home'}  margin={'3rem 3rem 3rem 3rem'}>

            <Box p={'2rem'}>
               {/* About Me Section */}
               <h1 className={Style.center} marginBottom={'1rem'}>ABOUT ME</h1>
               <p className={Style.center}>Here is a little bit about me <span className={Style.hand}>✌🏿</span>!</p>

               <div className={Style.row}>
                  <div className={Style.column}>
                     <h3 className={Style.aboutHeading}>Get To Know Me!</h3>
                     <p className={Style.aboutp}>Hey! It's <strong><span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {info.fullName}</span> </strong> and I'm focused on <strong> Software and AI Engineering & Full-Stack, Front-End, Web Development / Engineering
                        </strong> located in Austin, TX. I am a passionate computer scientist whose ultimate goal is to personally serve and
                        positively impact society by developing applications and software.
                     </p>

                     <a href="https://www.linkedin.com/in/magret-adekunle/"  target="_blank" rel="noopener noreferrer" className={Style.btn}>Contact Me</a>
                     <a href={resume} className={Style.btn}  target="_blank" rel="noopener noreferrer"> View/Download Resume </a>

                  </div>

                  {/* My Skills Scetion */}
                  <div className={Style.column}>
                     <h3 className={Style.aboutHeading}>My Skills</h3>
                     <div className={Style.skills}>

                        <div className={Style.skills__skill}>Python</div>
                        <div className={Style.skills__skill}>Java</div>
                        <div className={Style.skills__skill}>PHP</div>
                        <div className={Style.skills__skill}>R</div>
                        <div className={Style.skills__skill}>Swift</div>
                        <div className={Style.skills__skill}>Processing</div>

                        <div className={Style.skills__skill}>HTML</div>
                        <div className={Style.skills__skill}>CSS</div>
                        <div className={Style.skills__skill}>Figma</div>

                        <div className={Style.skills__skill}>React.js</div>
                        <div className={Style.skills__skill}>Flask</div>
                        <div className={Style.skills__skill}>Bootstrap</div>

                        <div className={Style.skills__skill}>SQL</div>
                        <div className={Style.skills__skill}>PostgreSQL</div>

                        <div className={Style.skills__skill}>Amazon Web Services (AWS)</div>
                        <div className={Style.skills__skill}>Google Cloud Platform (GCP)</div>

                        <div className={Style.skills__skill}>GIT</div>
                     </div>
                  </div>
               </div>
            </Box>
         </Box>

         {/* Some Projects */}
         <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 100px)'} id={'home'} p={'1rem'}>

            <Box>
               <h1 className={Style.center}>PROJECTS</h1>
               <p className={Style.center}>Here are some of my projects! <span className={Style.hand}>✌🏿</span>!</p>

               <Box id={'portfolio'} ref={innerRef} p={'4em'}>
                  <Grid container display={'flex'}>
                     {info.portfolio.map((project, index) => (
                        <Grid item sm={12} md={7} key={index}>
                           <PortfolioBlock image={project.image}
                              live={project.live} source={project.source} title={project.title} description={project.description} />
                        </Grid>
                     ))}
                  </Grid>

               </Box>
               <a href="./portfolio" className={Style.btn}>View All Projects</a>
            </Box>
         </Box>
      </>
   )
}