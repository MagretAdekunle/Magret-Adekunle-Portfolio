import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Style from './Portfolio.module.scss';


function PortfolioBlock(props) {
   const { image, live, source, description, title } = props;
   return (
      <>
         <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} margin={'8rem 6rem auto 6rem'}>
            <Box component={'img'} className={'photo'} src={image} alt={'mockup'} />
            <h1 style={{ fontSize: '1.7rem', marginTop: '2rem' }}>{title}</h1>

            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={''} alignItems={'center'} fontSize={'1.5rem'}>

               <p style={{ fontSize: '1.3rem' , marginTop: '1rem'}}> {description}</p>

               <Box display={'inline-block'}>

                  <Box className={Style.btn}>
                     <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
                  </Box>

                  <span style={{ marginRight: '1rem' }}></span>

                  <Box className={Style.btn}>
                     <IconLink link={live} title={'Live Link'} icon={'fa fa-safari'} />
                  </Box>

               </Box>
            </Box>
         </Box>
      </>
   );
}

export default PortfolioBlock;