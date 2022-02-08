import React from "react";
import { Grid, Typography, makeStyles, Button, alpha } from "@material-ui/core";
import classNames from "classnames";

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
                  Chinaemerem.
               </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
               <Typography
                  className={classNames(classes.bigText, classes.paleText)}
                  variant="h4"
                  color="initial"
               >
                  A web developer
               </Typography>
            </Grid>
            <Grid item xs={12} sm={8} className={classes.textContainer}>
               <Typography
                  className={classes.paleText}
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
                  className={classes.btn}
                  variant="outlined"
                  color="secondary"
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  my cv
               </Button>
            </Grid>
         </Grid>
      </section>
   );
};

export default Hero;
