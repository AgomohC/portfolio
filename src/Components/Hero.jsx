import React from "react";
import { Grid, Typography, makeStyles, Button, alpha } from "@material-ui/core";
import classNames from "classnames";
import cv from "../assets/cv.pdf";

const useStyles = makeStyles((theme) => ({
   container: {
      height: "auto",
      paddingTop: theme.spacing(5),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      [theme.breakpoints.up("sm")]: {
         paddingTop: theme.spacing(10),
         paddingLeft: theme.spacing(10),
         paddingRight: theme.spacing(10),
      },
      display: "flex",
      alignItems: "center",
   },
   innerContainer: {
      height: "auto",
      minHeight: "100%",
      paddingBottom: theme.spacing(1),
   },
   textContainer: {
      marginTop: theme.spacing(1),
   },
   btn: {
      marginTop: theme.spacing(1),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
   },
   greenText: {
      color: theme.palette.secondary.main,
   },
   paleText: {
      color: alpha("#fff", 0.55),
   },
   nameText: {
      color: alpha("#fff", 0.85),
   },
   bigText: {
      fontSize: "3rem",
      [theme.breakpoints.up("sm")]: {
         fontSize: "4rem",
      },
      [theme.breakpoints.up("md")]: {
         fontSize: "5rem",
      },
   },
   "@keyframes enterLeft": {
      "0%": {
         opacity: 0,
         transform: "translateX(-200%)",
      },
      "100%": {
         opacity: 1,
         transform: "translateX(0)",
      },
   },
   "@keyframes enterLeft4": {
      "0%": {
         opacity: 0,
         transform: "translateX(-200%)",
      },
      "50%": {
         opacity: 0,
         transform: "translateX(-200%)",
      },
      "100%": {
         opacity: 1,
         transform: "translateX(0)",
      },
   },
   animation1: {
      animation: `$enterLeft 2s ease-in-out`,
   },
   animation2: {
      animation: `$enterLeft 4s ease-in-out`,
   },
   animation3: {
      animation: `$enterLeft 6s ease-in-out`,
   },
   animation4: {
      animation: `$enterLeft4 8s ease-in-out`,
   },
}));

const Hero = () => {
   const classes = useStyles();
   return (
      <section className={classes.container}>
         <Grid
            item
            className={classes.innerContainer}
            container
            alignItems="center"
            xs={10}
         >
            <Grid item xs={12} className={classes.textContainer}>
               <Typography
                  className={classNames(classes.greenText, classes.animation1)}
                  variant="h6"
                  color="initial"
               >
                  Hi, my name is
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
               <Typography
                  variant="h4"
                  component="h2"
                  color="initial"
                  className={classNames(
                     classes.nameText,
                     classes.bigText,
                     classes.animation2
                  )}
                  id="name-text"
               >
                  Chinaemerem.
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
               <Typography
                  className={classNames(
                     classes.bigText,
                     classes.paleText,
                     classes.animation3
                  )}
                  variant="h4"
                  color="initial"
               >
                  A web developer
               </Typography>
            </Grid>
            <Grid item xs={12} sm={8} className={classes.textContainer}>
               <Typography
                  className={classNames(classes.animation3, classes.paleText)}
                  variant="body1"
                  component="h4"
                  color="initial"
               >
                  A full stack engineer with experience building web apps with
                  modern technologies. I'm able to create pixel perfect UI
                  design with front end technologies. I can also create and
                  implement REST-ful APIs.
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
               <Button
                  className={classNames(classes.btn, classes.animation4)}
                  variant="outlined"
                  color="secondary"
                  component="a"
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
               >
                  my cv
               </Button>
            </Grid>
         </Grid>
      </section>
   );
};

export default Hero;
