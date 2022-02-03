import Head from 'next/head'
import Image from 'next/image'
import race from '../public/images/race2.png'
import ecom from "../public/images/ecom.png"
import dis from '../public/images/disney.png'
import Link from 'next/link'
import {
  Grid, 
  Card, 
  CardActionArea,  
  CardContent, 
  Typography,
  CardActions,
  Button,} 
  from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';


const Home = () => {

let theme = createTheme({
  typography: {
    fontFamily:'Quicksand',
    textAlign: "center"
  },
  palette: {
    primary: {
      main: '#001540',
    },
    secondary: {
      main: '#8FE3E6',
    }},
})

theme = responsiveFontSizes(theme)

theme.typography.h2 = {
  fontSize: '1.9rem',
  '@media (min-width:600px)': {
    fontSize: '2.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}

theme.typography.h4 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};
 
  return (
      <>
        <Head>
        <title>Kara Temple Web Developer</title>
        <meta name="description" content="Kara Temple Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;557&family=Urbanist:wght@100&display=swap" rel="stylesheet"/> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&family=Urbanist:wght@100&display=swap" rel="stylesheet"/> 
        </Head>

        <ThemeProvider theme={theme}>
        <Grid>
          <Grid item xs={12} md={16} lg={16}>
          <Card style={{backgroundColor: '#001540'}}>
              <CardContent>
                <div style={{position: 'relative'}} >
                  <Image src={race} width={1400} height={800}></Image>
                      <div style={{
                        position: 'absolute', 
                        color: '#001540', 
                        top: '12%', 
                        left: '75%', 
                        transform: 'translateX(-50%)'
                        }}>
             
                      <Typography
                          style={{  fontFamily: 'Quicksand'}}
                          variant="h2">
                        Welcome!                   
                        </Typography>

                        <Typography
                       style={{  padding: ".5rem", fontFamily: 'Quicksand'}}
                      variant="h3">
                      I'm Kara.            
                        </Typography>
                          <br></br>
                        <Typography
                        style={{ fontFamily: 'Urbanist'}}
                      variant="h4"> 
                    I create applications that inspire, inform and captivate audiences
                        </Typography>
             
                   <CardActions style={{ display: "flex", justifyContent: "center", padding: "1.3rem", alignItems: "center"}}>
                   <Button 
                    color="primary"
                    variant="outlined"
                    href="https://github.com/Wrangler416/e-shop"
                    >resume</Button>
                    <Button 
                    variant="outlined"
                    href="https://github.com/Wrangler416?tab=repositories"
                    >GitHub</Button>
                  </CardActions>
                      </div>
                      </div>
                    </CardContent>    
            </Card>        
          </Grid>
      </Grid>
          
      <Grid>
          <Grid item xs={12} md={16} lg={16}>
          <Card style={{backgroundColor: '#001540'}}>
          <Typography 
              color="secondary"
              variant="h2"
              style={{textAlign: "center", margin: "2rem", fontFamily: 'Quicksand'}}>
            Projects 
          </Typography>
          </Card>
      </Grid>
  </Grid>
        
    
         <Grid container>
          <Grid 
          item xs={6} md={8}>
            <Link href={"https://e-shop-rho.vercel.app/"}>
              <Card style={{backgroundColor: '#001540'}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography 
                      color="secondary"
                      style={{textAlign: "center",fontFamily: 'Urbanist'}}
                      variant="h3">
                     Shopify & React App 
                      </Typography>
                      <Typography 
                      variant="h4"
                      color="secondary"
                      style={{fontFamily: 'Urbanist', textAlign: "center", margin: '.5rem'}}
                      >
                     An E Commerce Nike Clone 
                      </Typography>
                      <br></br>
                      <Image src={ecom} width={400} height={300}></Image>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    color="secondary"
                    variant="outlined"
                    href="https://github.com/Wrangler416/e-shop"
                    >Go to Site</Button>
                    <Button 
                    color="secondary"
                    variant="outlined"
                    href="https://github.com/Wrangler416/e-shop"
                    >Git Repo</Button>
                  </CardActions>
              </Card>
              </Link>
              </Grid>

              <Grid 
          item xs={6} md={8}>
            <Link href={"https://disney-plus-eta.vercel.app/"}>
              <Card style={{backgroundColor: '#001540'}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography 
                      color="secondary"
                      style={{textAlign: "center",fontFamily: 'Urbanist'}}
                      variant="h3">
                     Next JS & GraphCMS
                      </Typography>
                      <Typography 
                      variant="h4"
                      color="secondary"
                      style={{fontFamily: 'Urbanist', textAlign: "center", margin: '.5rem'}}
                      >
                     A Disney Plus clone
                      </Typography>
                      <br></br>
                      <Image src={dis} width={400} height={300}></Image>
                    </CardContent>

                  </CardActionArea>
                  <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    color="secondary"
                    variant="outlined"
                    href="https://disney-plus-eta.vercel.app/"
                    >Go to Site</Button>
                    <Button 
                    color="secondary"
                    variant="outlined"
                    href=""
                    >Git Repo</Button>
                  </CardActions>
              </Card>
              </Link>
              </Grid>
        </Grid>

    </ThemeProvider>
       </> 
 )
}


export default Home