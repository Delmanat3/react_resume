import React from 'react';
import { Box } from '@mui/system';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction} from '@mui/material';
import { SpeedDialIcon} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import PrintIcon from '@mui/icons-material/Print';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Hero from './Hero';
// import { jsx } from '@emotion/react';
// import React from 'react';
const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <GitHubIcon />, name: 'Github' },
  { icon: <ArticleIcon />, name: 'Resume' },
  { icon: <AudiotrackIcon />, name: 'Spotify' },
];

export default function SpeedDialer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
   
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<ContactPageIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
     
  
  );
}