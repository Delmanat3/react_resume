import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Card from './Cards';
import MediaQuery from './mediaQueries';
import { Divider, Grid } from '@mui/material';

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
    {/* <figcaption className="figure-caption">Welcome To The Wonderfull World Of BootStrap </figcaption> */}
    </figure>
      <Typography variant="h5" align="center" color="text.secondary" >
        About Me:
      </Typography>
      <Divider/>
      <Typography variant="p2" align="center" paragraph>
      Hi, I'm a Full-Stack web developer. Well really I'm just a guy that's been coding since he was twelve, who decided to attend a bootcamp mid-covid.
      love to build things, I love to fix things and I love to learn. The rest is better shown than spoken. 
      </Typography>
     
      <Typography
      sx={{pt:'2rem'}}
      variant="h5" align="center" color="text.secondary" >
        Skills:
      </Typography>
      <Divider/>
      <Grid sx={{ 
        justifyContent:"space-evenly",
        //mt:"-1rem"
        }} container >
      <Box>
      <Typography variant="p2" align="center" >
      Programming languages
      </Typography>
      <ul
      >
        <li>
          Javascript
        </li>
        <li>
          php(learning)
        </li>
      </ul>
      </Box>

      <Box>
      <Typography variant="p2" align="center" >
      Frameworks/Other
      </Typography>
      <ul
      >
        <li>
          React
        </li>
        <li>
          MongoDB
        </li>
        <li>
          MySQL
        </li>
      </ul>
      </Box>
      <Box>
      <ul
      >
        <li>
          Express
        </li>
        <li>
          jQuery
        </li>
        <li>
          HandleBars
        </li>
      </ul>
      </Box>
      </Grid>
    </Container>
  </Box>
  </ThemeProvider>
  
  <Card state={state}/>
  </div>
  )
  }