import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SpeedDialer from './speedDial';
import { useState } from 'react';
import { useEffect } from 'react';
// import SpeedDialer from './speedDial';
import Portfolio from './portfolio';
export default function MediaQuery(){
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1450);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
    return (
      <div>
        {isDesktop ? (
           <SpeedDialer/>
        ) : (
        
          <Portfolio/>
        )}
      </div>
    );
  }
