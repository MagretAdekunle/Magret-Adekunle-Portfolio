import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function About({ innerRef }) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                
                {info.bio2}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/maintools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/maintools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function moreSkillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/alltools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/alltools <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <p style={{ color: info.baseColor }}> Programming Languages</p>
            <ul className={Style.skills}>
                {info.mySkills.programmingLanguages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>

            <p style={{ color: info.baseColor }}> Web Technologies </p>
            <ul className={Style.skills}>
                {info.mySkills.webTechnologies.map((web, index) => <li key={index}>{web}</li>)}
            </ul> 

            <p style={{ color: info.baseColor }}> Frameworks & Libraries </p>
            <ul className={Style.skills}>
                {info.mySkills.frameworksAndLibraries.map((web, index) => <li key={index}>{web}</li>)}
            </ul> 

            <p style={{ color: info.baseColor }}> Databases & Data </p>
            <ul className={Style.skills}>
                {info.mySkills.databasesAndData.map((data, index) => <li key={index}>{data}</li>)}
            </ul> 

            <p style={{ color: info.baseColor }}> Cloud Platforms </p>
            <ul className={Style.skills}>
                {info.mySkills.cloudPlatforms.map((cloud, index) => <li key={index}>{cloud}</li>)}
            </ul> 

            <p style={{ color: info.baseColor }}> Other </p>
            <ul className={Style.skills}>
                {info.mySkills.other.map((other, index) => <li key={index}>{other}</li>)}
            </ul> 
        </>;
    }

    function myResearch() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
            myresearch
            </p>
            <p><span style={{ color: info.baseColor }}>about{"myresearch"} <span
                className={Style.green}>(main)</span> $ </span>
                {info.myresearch1}
            </p>
            <p>{info.myresearch2}</p>
            <p>{info.myresearch3}</p>
        </>;
    }

    function researchInterests() {
        return <>
            <p><span style={{ color: info.baseColor,}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
            research/interests</p>
            <p><span style={{ color: info.baseColor }}>research/interests<span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.researchInterests.map((interests, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{interests.emoji}</Box>{interests.label}</li>
                ))}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'} marginTop={'10rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={moreSkillsText()} />
            <Terminal text={myResearch()}/>
            <Terminal text={researchInterests()}/>
            <Terminal text={miscText()} />
        </Box>
    )
}