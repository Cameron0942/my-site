//? REACT
import React, { useRef, useEffect } from 'react';

//? MATERIAL UI
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? IMAGES
const github = require('../assets/github-icon.svg').default;
const newtab = require('../assets/newtab-icon.png');

//? Responsive
const theme = createTheme();

const ProjectCard = (projectTitle) => {
    let title = Object.values(projectTitle);
    title = title.toString();
    title = title.replaceAll(',', '');

    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
        <ThemeProvider theme={theme}>
            <div style={{maxWidth: '70ch'}}>
                <h1 style={{color: 'white', marginBottom: 8, fontSize: isLg ? 'auto' : '1.5em'}}>{title}</h1>
                <p style={{color: 'white', marginBottom: 8, fontSize: isLg ? 'auto' : '0.75em', textShadow: '2px 2px black'}}>
                    Coming Soon!<br></br><br></br>
                </p>
                <div style={{marginBottom: 8}}>
                    <Chip label='React' style={{color: 'white', backgroundColor: 'green'}} />
                    <Chip label='Express' color='success' />
                    <Chip label='Node' color='success' />
                    <Chip label='MongoDB' color='success' />
                </div>
                <a href='/'><img className='github-project' src={github}></img></a>
                <a href='/'><img className='project-live-link' src={newtab}></img></a>
            </div>
        </ThemeProvider>
        </>
    )
};

export default ProjectCard;