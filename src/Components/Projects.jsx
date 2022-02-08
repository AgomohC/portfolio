import React from "react";
import classNames from "classnames";
import {
   Grid,
   makeStyles,
   Typography,
   alpha,
   Card,
   CardMedia,
   CardActions,
   CardContent,
   Button,
} from "@material-ui/core";
import { Link, GitHub } from "@material-ui/icons";
import portFolio from "../assets/portfolio.png";
import quotes from "../assets/quotes.png";
import countries from "../assets/countries.png";
import landing from "../assets/landing.png";
import store from "../assets/store.png";
import storeApi from "../assets/store-api.png";
import tourism from "../assets/tourism.png";
import converter from "../assets/converter.png";
import shortener from "../assets/shortener.png";
import metadata from "../assets/metadata.png";

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: "100vh",
      paddingTop: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
         paddingLeft: theme.spacing(10),
      },
   },
   text: {
      color: alpha("#fff", 0.85),
   },
   greenText: {
      color: theme.palette.secondary.main,
   },
   number: {
      marginRight: theme.spacing(2),
   },
   divider: {
      width: "100%",
      height: 2,
      backdropFilter: "blur(4px)",
      backgroundColor: alpha(theme.palette.secondary.main, 0.85),
   },

   marginBottomFour: {
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
         marginBottom: theme.spacing(6),
      },
   },
   card: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[12],
      width: "auto",
   },
   cardImg: {
      height: "150px",
      width: "100%",
   },
   paddingTwo: {
      padding: theme.spacing(2),
   },
   paleGreenText: {
      color: alpha("#64ffda", 0.55),
      marginTop: theme.spacing(1),
   },
}));
const Projects = () => {
   const classes = useStyles();
   return (
      <section id="projects" className={classes.container}>
         <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
         >
            <Grid container item alignItems="center" spacing={2} xs={12} md={6}>
               <Grid item className={classes.marginBottomFour} xs={7} md={6}>
                  <Typography className={classes.text} variant="h5">
                     <span
                        className={classNames(
                           classes.number,
                           classes.greenText
                        )}
                     >
                        03.
                     </span>
                     Projects.
                  </Typography>
               </Grid>
               <Grid className={classes.marginBottomFour} item xs={5} md={6}>
                  <div className={classes.divider}></div>
               </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={4}>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="A Portfolio Web App"
                        image={portFolio}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           This portfolio website
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Context API + Material-UI
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://portfolio-agomohc.vercel.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/portfolio"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="Random Quotes Generator"
                        image={quotes}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Quotes Generator
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + BootStrap
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-quotes-generator-2.netlify.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/random-quotes-generator"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="A countries app"
                        image={countries}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Countries App
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Material-UI + Axios + Context API
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-countries.vercel.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/femto-countries"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="landing page clone"
                        image={landing}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Landing Page Clone
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           HTML5 + CSS3 + Javascript
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://orbiter-clone.vercel.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/orbiter-clone"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="A full stack e-commerce app"
                        image={store}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Peculiar Store
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Material-UI + Redux/Toolkit + Axios +
                           React-Router-Dom + React-Redux
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://peculiar-store.vercel.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/store"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="An e-commerce app api"
                        image={storeApi}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Peculiar Store API
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           ExpressJS + Mongoose + PayStack API + JSONWebTokens
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://peculiar-store.vercel.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/store-backend"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="A space tourism app"
                        image={tourism}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Space Tourism
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Material-UI
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-space-tourism.vercel.app/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/femto-space-tourism"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="Metric Imperial Converter"
                        image={converter}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Metric Imperial Converter
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           ExpressJS + HTML5 + CSS3
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-metric-converter.glitch.me/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/metric-imperial-converter"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="URL Shortener"
                        image={shortener}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           URL Shortener
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           ExpressJS + Mongoose
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-url-shortener.glitch.me/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/url-shortener"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="File Metadata"
                        image={metadata}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           File Metadata
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           ExpressJS + Cloudinary + Multer
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-metadata.glitch.me/"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                           size="small"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://github.com/AgomohC/file-metadata"
                           rel="noopener noreferrer"
                           color="secondary"
                           size="small"
                        >
                           <GitHub />
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
            </Grid>
         </Grid>
      </section>
   );
};

export default Projects;
