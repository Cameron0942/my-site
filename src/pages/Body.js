//? REACT
import React, { useState, useEffect } from 'react';

//? MATERIAL UI
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

//? COMPONENTS
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

//? IMAGES
const github = require('../assets/github-icon.svg').default;
const linkedin = require('../assets/linkedin-icon.svg').default;
const githubWhite = require('../assets/github-white-icon.svg').default;
const linkedinWhite = require('../assets/linkedin-white-icon.svg').default;

//? Responsive
const theme = createTheme();

const copyToClipboard = () => {
    // Get the text field and value
    let copyText = document.getElementById("click-email").innerText;

    // Write text to clipboard
    navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Email copied to clipboard");
};

const Body = () => {
    const [isGitHovered, setIsGithovered] = useState(false);
    const [isLinkedHovered, setIsLinkedhovered] = useState(false);
    const [isEmailHovered, setIsEmailhovered] = useState(false);

    //* Responsive
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    //* Github hover
    const handleGitMouseEnter = () => {
        setIsGithovered(true);
    };

    const handleGitMouseLeave = () => {
        setIsGithovered(false);
    };

    //* LinkedIn hover
    const handleLinkedMouseEnter = () => {
        setIsLinkedhovered(true);
    };

    const handleLinkedMouseLeave = () => {
        setIsLinkedhovered(false);
    };

    //* Email hover
    const handleEmailMouseEnter = () => {
        setIsEmailhovered(true);
    };

    const handleEmailMouseLeave = () => {
        setIsEmailhovered(false);
    };

    return(
        <>
        <ThemeProvider theme={theme}>
            {/*low opacity underlay box */}
            <Box sx={{
                padding: 0,
                position: 'relative',
                minHeight: '100%',            
                
                '&::before': {
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) , #19376D 50%)',
                }
            }}>

                <Box sx={{
                    width: '98vw',
                    height: 'auto',
                    padding: 0,
                    opacity: 1,
                    position: 'relative',
                    zIndex: 1
                    }}>
                        <aside style={{height: '88vh', left: '0.5em', color: 'white', position: 'fixed', zIndex: 30, display: isLg ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <a onMouseEnter={handleGitMouseEnter} onMouseLeave={handleGitMouseLeave} href='https://github.com/Cameron0942' target='_blank' rel='noreferrer'><img src={ isGitHovered ? githubWhite : github } alt='github link' style={{}} /></a>
                            <a onMouseEnter={handleLinkedMouseEnter} onMouseLeave={handleLinkedMouseLeave} href='https://www.linkedin.com/in/cameron--burns/' target='_blank' rel='noreferrer'><img src={ isLinkedHovered ? linkedinWhite : linkedin } alt='linkedin link' style={{}} /></a>
                            <div style={{width: '2px', height: '8em', backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto'}} />
                        </aside>

                        <aside style={{height: '88vh', right: '0.5em', color: 'white', position: 'fixed', zIndex: 20, display: isLg ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <span onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} onClick={copyToClipboard} target='_blank' rel='noreferrer' style={{transform: 'rotate(90deg)', marginBottom: 90, textDecoration: 'none', color: isEmailHovered ? 'white' : 'black', cursor: 'pointer', paddingTop: '15px', paddingBottom: '15px', paddingRight: 0, paddingLeft: 0}}><p id='click-email'>burnsc0942@gmail.com</p></span>
                            <div style={{width: '2px', height: '8em', backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto'}} />
                        </aside>
                        <Hero />
                        <Projects />
                        <Contact />
                </Box>
            </Box>
        </ThemeProvider>
          </>
    );
}

export default Body;