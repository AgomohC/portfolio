import React from "react";
import { Grid, makeStyles, Typography, alpha } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      height: "100vh",
      padding: theme.spacing(5),
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
      marginRight: theme.spacing(2),
   },
   divider: {
      width: "100%",
      height: 2,
      backdropFilter: "blur(4px)",
      backgroundColor: alpha(theme.palette.secondary.main, 0.85),
   },
   marginBottomFour: {
      marginBottom: theme.spacing(5),
      [theme.breakpoints.up("md")]: {
         marginBottom: theme.spacing(10),
      },
   },
}));

const About = () => {
   const classes = useStyles();
   return (
      <section id="about" className={classes.container}>
         <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
         >
            <Grid container alignItems="center" spacing={2} item xs={12} md={6}>
               <Grid item className={classes.marginBottomFour} xs={7} md={5}>
                  <Typography className={classes.text} variant="h5">
                     <span className={classes.greenText}>01.</span> About Me.
                  </Typography>
               </Grid>
               <Grid className={classes.marginBottomFour} item xs={5} md={7}>
                  <div className={classes.divider}></div>
               </Grid>
               <Grid item xs={12}>
                  <Typography
                     className={classes.text}
                     variant="body1"
                     color="initial"
                  >
                     I'm a full-stack developer dedicated to building immersive
                     and responsive front end applications which are compliant
                     with modern SEO standards and connecting them to custom
                     REST-ful APIs built and maintained by me. I'm a self taught
                     developer who started my coding journey in November 2020 at
                     the height of the COVID-19 pandemic. I am currently looking
                     for a position :D
                  </Typography>
               </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
               <img src="#" alt="chinaemerem" />
            </Grid>
         </Grid>
      </section>
   );
};

export default About;
