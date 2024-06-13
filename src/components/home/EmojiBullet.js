import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    return (
        <Box component={'li'} fontSize={'1.2rem'} lineHeight={1.5} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '.5rem', md: '1rem'}} fontSize={'2rem'}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;