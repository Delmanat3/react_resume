import React ,{ useEffect }from "react"
import Hero from "./Hero";
// import { Drawer } from '@mui/material';


{/* <SpeedDialer /> */}

export default function Portfolio() {
  
  
  return  (
<div>
    <ul className="nav nav-pills nav-justified" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">nave-boy
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><a className="nav-link" href="https://docs.google.com/document/d/1aXTFFsMv39qBCVWlrqkPwEPozj1nuI_M/edit?usp=sharing&ouid=103290375021955881772&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a></button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false"><a className="nav-link" href="https://github.com/Delmanat3" target="_blank" rel="noopener noreferrer">Github</a></button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><a className="nav-link" aria-current="page" href= "https://www.spotify.com/us/" target="_blank" rel="noopener noreferrer">Spotify</a></button>
    </li>
  </ul>
   {/* <Hero/> */}
   </div>
 
  );
}

  
