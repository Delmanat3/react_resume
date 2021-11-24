import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Card from './Cards';
import MediaQuery from './mediaQueries';

const projectOne='./images/imgs/projectOne.png'
const plannerPic='./images/imgs/plannerpic.png'
const weatherPic='./images/imgs/weatherpic.png'

    const state=[{
        title:['project 1','project 2','project 3'],
           images:[projectOne,plannerPic,weatherPic],
           link:["https://cole-cochran.github.io/crypto-cosmos/","https://delmanat3.github.io/weather-page/","https://delmanat3.github.io/daily-planner/"],
           content:[]
       }]
     



export default function Hero(){
    const theme = createTheme();
    return(
        <div>
<ThemeProvider theme={theme}>
<CssBaseline />
  {/* Hero unit */}
  <MediaQuery />
  <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 3,
    }}
  >
    <Container maxWidth="md">
    <figure className="figure">
    <figcaption className="figure-caption fs-1">NATHAN DELMAN </figcaption>
    <img src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?crop=entropy&dpr=2&fit=crop&fm=jpg&h=700&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1300" className="figure-img img-fluid rounded" alt="backroundimg"/>
    <figcaption className="figure-caption">Welcome To The Wonderfull World Of BootStrap </figcaption>
    </figure>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
       I gonna kill myself. Waste to much time. The entire day.
      </Typography>
      {/* <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button variant="contained">Main call to action</Button>
        <Button variant="outlined">Secondary action</Button>
      </Stack> */}
    </Container>
  </Box>
  </ThemeProvider>
  
  <Card state={state}/>
  </div>
  )
  }