import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Cards() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  sx={{
                    16: 9,
                    // pt: '56.25%',
                  }}
                  image="./images/imgs/cur.png"
                  alt="coz"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    cosmozcurrency
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <small> work in progress.. but check it out!</small>
                    <br />
                    <br />
                    Coin tracker. First project post bootcamp, Rebuilding
                    initial idea into a react application. Built using a whole
                    lot.
                    <br /> styling is horrid though everything is functional.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Link To Github</Button>
                  <Button href="http://cosmozcurrency.com/" size="small">
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/imgs/projectOne.avif"
                  alt="cosmos currency"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    CryptoCosmos
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    -First collaborative Work
                    <br />
                    A Crypto and Fiat currency news and price aggregation site.
                    <br /> Built using JQUERY with coinGecko as the external API
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="https://github.com/cole-cochran/Crypto-Cosmos" size="small">Github</Button>
                  <Button href="https://cole-cochran.github.io/crypto-cosmos/"size="small">Demo</Button>
                </CardActions>
              </Card>
            </Grid>
            {/* <Grid item  xs={12} sm={6} md={4}>

    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image="./images/imgs/weatherpic.avif"
        alt="Weather app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid> */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/imgs/h2.avif"
                  alt="feed"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Feed Your Lifestyle
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    -Second collaborative Work
                    <br />
                    A diet app that will recommend recipes based on the users
                    profile.
                    <br />
                    Backend built on SQL, while using HANDLEBARS for the
                    frontend.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="https://github.com/Delmanat3/Feed-Your-Lifesyle" size="small">Github</Button>
                  <Button href="https://feed-your-lifestyle.herokuapp.com/" size="small">Demo</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/imgs/fiveStar.png"
                  alt="Coming Soon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    fiveStar
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    -Third collaborative Work
                    <br />
                    Austin specific recommendation service.
                    <br />
                    built using MERN,GRAPHQL and APOLLO
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="https://github.com/samkilpatrick903/fiveStar" size="small">Github</Button>
                  <Button href="https://fivestardrinks.herokuapp.com/" size="small">Demo</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="./images/imgs/h1.avif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Budgeting App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   budgeting PWA
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="https://github.com/Delmanat3/budget_boy" size="small">Github</Button>
                  <Button size="small"></Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
