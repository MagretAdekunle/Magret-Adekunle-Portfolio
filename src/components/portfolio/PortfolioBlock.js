// import React from 'react';
// import IconLink from "./IconLink";
// import {Box} from "@mui/material";

// function PortfolioBlock(props) {
//    const {image, live, source, title} = props;
//    return (
//       <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
//          <Box component={'img'} src={image} alt={'mockup'}/>
//          <h1 style={{fontSize: '2rem'}}>{title}</h1>
//          <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
//               alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
//             </Box>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
//             </Box>
//          </Box>
//       </Box>
//    );
// }

// export default PortfolioBlock;

import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Style from './Portfolio.module.scss';


function PortfolioBlock(props) {
   const { image, live, source, description, title } = props;
   return (
      <>
         <Box component={'main'} display={'flex'} flexDirection={{ sm: 'column', md: 'row', xl: 'row' }} alignItems={'center'} margin={'3rem 3rem 3rem 3rem'}>
            <Box component={'img'} src={image} className={Style.image} />

            <Box className={Style.portfolio} display={'block'}  >
               <Box><h2 style={{ fontSize: '2rem', margin: '2rem auto 2rem auto' }}>{title}</h2></Box>

               <p style={{ fontSize: '1.3rem' }}> {description}</p>

               <Box className={Style.btn}>
                  <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
               </Box>
               <span style={{ marginRight: '1rem' }}></span>

               <Box className={Style.btn}>
                  <IconLink link={live} title={'Live Link'} icon={'fa fa-safari'} />
               </Box>
            </Box>
         </Box>
      </>
   );
}

export default PortfolioBlock;