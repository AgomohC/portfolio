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
import timestamp from "../assets/timestamp.png";
import markdown from "../assets/markdown.png";
import pomodoro from "../assets/pomodoro.png";
import tracker from "../assets/tracker.png";
import header from "../assets/header.png";
import tribute from "../assets/tribute.png";
import library from "../assets/library.png";
import issues from "../assets/issues.png";
import drum from "../assets/drum.png";
import message from "../assets/message.png";
import calculator from "../assets/calculator.png";
import stock from "../assets/stock.png";

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
      minWidth: 160,
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
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia
                        className={classes.cardImg}
                        title="Timestamp App"
                        image={timestamp}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Timestamp App
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           ExpressJS
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-timestamp.glitch.me/"
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
                           href="https://github.com/AgomohC/timestamp-app"
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
                        title="Markdown Previewer"
                        image={markdown}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Markdown Previewer
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Bootstrap + MarkedJS
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-markdown-previewer-2.netlify.app/"
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
                           href="https://github.com/AgomohC/markdown-previewer"
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
                        title="Pomodoro Timer"
                        image={pomodoro}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Pomodoro Timer
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Bootstrap
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-pomodoro-app.netlify.app/"
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
                           href="https://github.com/AgomohC/pomodoro-timer"
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
                        title="Exercise Tracker"
                        image={tracker}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Exercise Tracker
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
                           href="https://femto-exercise-tracker.glitch.me/"
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
                           href="https://github.com/AgomohC/exercise-tracker"
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
                        title="Header Parser"
                        image={header}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Header Parser
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           ExpressJS
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-header-parser.glitch.me/"
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
                           href="https://github.com/AgomohC/header-parser"
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
                        title="Tribute Page"
                        image={tribute}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Tribute Page
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           HTML5 + CSS3
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://tribute-page-eight-omega.vercel.app/"
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
                           href="https://github.com/AgomohC/tribute-page"
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
                        title="Issue Tracker API"
                        image={issues}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Issue Tracker API
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
                           href="https://femto-issue-tracker.herokuapp.com/"
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
                           href="https://github.com/AgomohC/issue-tracker"
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
                        title="Personal Library API"
                        image={library}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Personal Library API
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
                           href="https://femto-private-library.herokuapp.com/"
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
                           href="https://github.com/AgomohC/personal-library"
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
                        title="Drum Machine"
                        image={drum}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Drum Machine
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Bootstrap
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-javascript-calculator.netlify.app/"
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
                           href="https://github.com/AgomohC/javascript-calculator"
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
                        title="Anonymous Message Board API"
                        image={message}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Anon Message Board API
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           Express + Mongoose
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-anon-messaging-api.herokuapp.com/api-docs/"
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
                           href="https://github.com/AgomohC/AgomohC-anonymous-message-board"
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
                        title="Javascript Calculator"
                        image={calculator}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Javascript Calculator
                        </Typography>
                        <Typography
                           className={classes.paleGreenText}
                           variant="body2"
                        >
                           React + Bootstrap
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.paddingTwo}>
                        <Button
                           component="a"
                           target="_blank"
                           href="https://femto-javascript-calculator.netlify.app/"
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
                           href="https://github.com/AgomohC/javascript-calculator"
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
                        title="Stock Price Checker API"
                        image={stock}
                     />
                     <CardContent>
                        <Typography variant="h5" className={classes.greenText}>
                           Stock Price Checker API
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
                           href="https://femto-stock-price-checker.herokuapp.com/"
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
                           href="https://github.com/AgomohC/stock-price-checker"
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
