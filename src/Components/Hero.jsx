import React from "react";
import { Grid, Typography, makeStyles, Button, alpha } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: 56,
      height: "auto",
      minHeight: "calc(100vh - 56px)",
      paddingLeft: theme.spacing(4),
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
         marginTop: 48,
         minHeight: "calc(100vh - 48px)",
      },
      [theme.breakpoints.up("sm")]: {
         marginTop: 64,
         paddingLeft: theme.spacing(10),
         minHeight: "calc(100vh - 64px)",
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
                  className={classes.greenText}
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
                  className={classNames(classes.nameText, classes.bigText)}
               >
                  Emerem Agomoh.
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
               <Typography
                  className={classNames(classes.bigText, classes.paleText)}
                  variant="h4"
                  color="initial"
               >
                  A full stack web developer
               </Typography>
            </Grid>
            <Grid item xs={10} sm={8} md={6} className={classes.textContainer}>
               <Typography
                  className={classes.paleText}
                  variant="body1"
                  component="h4"
                  color="initial"
               >
                  I'm a software engineer with experience building web apps with
                  modern technologies like ReactJS/Material-UI/NodeJS/ExpressJS/
                  MongoDB and Mongoose ODM
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
               <Button
                  className={classes.btn}
                  variant="outlined"
                  color="secondary"
               >
                  my cv
               </Button>
            </Grid>
         </Grid>
      </section>
   );
};

export default Hero;
