import Head from 'next/head'
import Image from 'next/image'
import race from '../public/images/race2.png'
import ecom from "../public/images/ecom.png"
import space from '../public/images/spacex.png'
import kite from '../public/images/kite.png'
import moa from '../public/images/moa.png'

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
  fontSize: '2.5em',
  '@media (min-width:600px)': {
    fontSize: '3.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.0rem',
  },
}

theme.typography.h3 = {
  fontSize: '2.4rem',
  '@media (min-width:600px)': {
    fontSize: '2.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4.8rem',
  },
}

theme.typography.h4 = {
  fontSize: '1.8rem',
  '@media (min-width:500px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.8rem',
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
        <Grid container columns={{ xs: 4, md: 12 }}>

          <Grid item xs={12} md={16} lg={16} >
          <Card style={{backgroundColor: '#001540'}}>
          <CardContent>
                <div style={{position: 'relative'}} >
              
                  <Image alt="sailsandsky" src={race} width={1900} height={1000}></Image>
                      <div style={{
                        position: 'absolute', 
                        color: '#001540', 
                        top: '12%', 
                        left: '73%', 
                        transform: 'translateX(-50%)'
                        }}>
                      <Typography
                          style={{  fontFamily: 'Quicksand'}}
                          variant="h2">
                        Welcome!                  
                        </Typography>
                        <br></br>
                
                        <Typography
                         style={{ fontFamily: 'Quicksand', margin: ".6rem"}}
                         variant="h3">
                        I'm Kara.         
                        </Typography>
                        </div>
                      
            
                      </div>
               </CardContent>

      <Typography
          color="secondary"
          style={{ fontFamily: 'Urbanist', textAlign: "center", margin: ".5rem"}}
          variant="h4"> 
        I design and develop applications that inspire and captivate 
      </Typography>
      <CardActions style={{ display: "flex", justifyContent: "center", padding: "1.3rem", alignItems: "center"}}>
        <Button 
               size="large"
               color="secondary"
               variant="outlined"
               href="https://www.canva.com/design/DAE3u2HTVNM/tR5RmakZ3Ctpw5cmMOZ5hQ/view?utm_content=DAE3u2HTVNM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                 >resume</Button>
                 <Button 
                 size="large"
                 color="secondary"
                 variant="outlined"
                href="https://github.com/Wrangler416?tab=repositories"
                 >GitHub</Button>
                  </CardActions>
          <Typography 
              color="secondary"
              variant="h2"
              style={{textAlign: "center", margin: "2rem", fontFamily: 'Quicksand'}}>
            Projects 
          </Typography>    
            </Card>        
          </Grid>
      </Grid>
          
  
    
         <Grid    container columns={{ xs: 4, md: 12 }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
          <Grid 
            item xs={6} md={8} lg={8}
          >
            <Link href={"https://e-shop-rho.vercel.app/"}>
              <Card style={{backgroundColor: '#001540', margin: ".2rem"}}>
                  <CardActionArea>
                    <CardContent style={{textAlign: "center"}}>
                      <Image alt="ecommerce-site" src={ecom} width={400} height={300}></Image>
                      <Typography 
                      color="secondary"
                      style={{textAlign: "center",fontFamily: 'Urbanist'}}
                      variant="h3"
                      margin="1rem">
                     Shopify & React 
                      </Typography>
                      <Typography 
                      variant="h4"
                      color="secondary"
                      style={{fontFamily: 'Urbanist', textAlign: "center", margin: '.5rem'}}
                      >
                     E Commerce Nike Clone 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="https://github.com/Wrangler416/e-shop"
                    >Site</Button>
                    <Button 
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="https://github.com/Wrangler416/e-shop"
                    >Repo</Button>
                  </CardActions>
              </Card>
              </Link>
              </Grid>

              <Grid 
               item xs={6} md={8} lg={8}>
            <Link href={"https://disney-plus-eta.vercel.app/"}>
              <Card style={{backgroundColor: '#001540', margin: ".2rem"}}>
                  <CardActionArea>
                    <CardContent style={{textAlign: "center"}}>
                      <Image alt="disneyplus-clonesite" src={moa} width={400} height={300}></Image>
                      <Typography 
                        margin="1rem"
                      color="secondary"
                      style={{textAlign: "center",fontFamily: 'Urbanist'}}
                      variant="h3">
                     NextJS & GraphCMS
                      </Typography>
                      <Typography 
                      variant="h4"
                      color="secondary"
                      style={{fontFamily: 'Urbanist', textAlign: "center", margin: '.5rem'}}
                      >
                     A Disney Plus clone
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                  <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="https://disney-plus-eta.vercel.app/"
                    >Site</Button>
                    <Button 
                     size="large"
                    color="secondary"
                    variant="outlined"
                    href=""
                    >Repo</Button>
                  </CardActions>
              </Card>
              </Link>
              </Grid>



              <Grid 
          item xs={6} md={8} lg={8}>
            <Link href={"https://space-x-dusky.vercel.app/"}>
              <Card style={{backgroundColor: '#001540', margin: ".2rem"}}>
                  <CardActionArea>
                    <CardContent style={{textAlign: "center"}}>
                      <Image alt="spacex-launchsite" src={space} width={400} height={300}></Image>
                      <Typography 
                      color="secondary"
                      margin="1rem"
                      style={{textAlign: "center",fontFamily: 'Urbanist'}}
                      variant="h3">
                     NextJS 
                      </Typography>
                      <Typography 
                      variant="h4"
                      color="secondary"
                      style={{fontFamily: 'Urbanist', textAlign: "center", margin: '.5rem'}}
                      >
                     Space X Launches
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                  <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="https://space-x-dusky.vercel.app/"
                    >Site</Button>
                    <Button 
                     size="large"
                    color="secondary"
                    variant="outlined"
                    href="https://github.com/Wrangler416/spaceX"
                    >Repo</Button>
                  </CardActions>
              </Card>
              </Link>
              </Grid>






              <Grid 
          item xs={6} md={8} lg={8}>
            <Link href={"http://www.kitesurfcat.com/"}>
              <Card style={{backgroundColor: '#001540', margin: ".2rem"}}>
                  <CardActionArea>
                    <CardContent style={{textAlign: "center"}}>
                      <Image alt="kitesurf-site" src={kite} width={400} height={300}></Image>
                      <Typography 
                      color="secondary"
                      margin="1rem"
                      style={{textAlign: "center",fontFamily: 'Urbanist'}}
                      variant="h3">
                     HTML5 / CSS3
                      </Typography>
                      <Typography 
                      variant="h4"
                      color="secondary"
                      style={{fontFamily: 'Urbanist', textAlign: "center", margin: '.5rem'}}
                      >
                     Kitesurfing Company 
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                  <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="http://www.kitesurfcat.com/"
                    >Site</Button>
                   
                  </CardActions>
              </Card>
              </Link>
              </Grid>


        <Grid item xs={12} md={16} lg={16} >
          <Card style={{backgroundColor: '#001540'}}>
          <CardContent style={{textAlign: "center"}}>
               <Typography
                  margin="1rem"
                  color="secondary"
                  variant="h4"
                  style={{fontFamily: 'Urbanist'}}
                  >
                Created with NextJS & Material UI 
                </Typography>


                <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                   <Button 
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="mailto: karaanntemple@gmail.com"
                    >Email Me</Button>
                  
                  </CardActions>

                  <Typography 
                       color="secondary"
                       style={{fontFamily: "Urbanist"}}
                       >
                      340 513 2289 
                    </Typography>
               </CardContent>
            </Card>
        </Grid>

      </Grid>

    </ThemeProvider>
       </> 
 )
}


export default Home