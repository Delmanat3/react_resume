import CssBaseline from '@mui/material/CssBaseline';
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
    <img src="./images/imgs/backgroundReact.avif" className="figure-img img-fluid rounded" alt="backroundimg"/>
    <figcaption className="figure-caption">Welcome To The Wonderfull World Of BootStrap </figcaption>
    </figure>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Fun filled times at UT Austin have led me here so please a look at my work below.
      </Typography>
    </Container>
  </Box>
  </ThemeProvider>
  
  <Card state={state}/>
  </div>
  )
  }