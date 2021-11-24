import * as React from 'react';
import SpeedDialer from './speedDial';
import { useState } from 'react';
import { useEffect } from 'react';
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
