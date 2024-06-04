import React from 'react';
import PortfolioGrid from "./PortfolioGrid";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio({innerRef}) {
    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioGrid image={project.image} live={project.live} source={project.source} description={project.description} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};