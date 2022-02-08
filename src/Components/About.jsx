import React from "react";
import { Grid, makeStyles, Typography, alpha } from "@material-ui/core";
import meImg from "../assets/me.jpg";

const useStyles = makeStyles((theme) => ({
   container: {
      height: "auto",
      paddingBottom: theme.spacing(10),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
         paddingLeft: theme.spacing(10),
      },
   },
   imgContainer: {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
         marginTop: 0,
      },
      height: "auto",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
   },
   img: {
      borderRadius: theme.spacing(2),
      height: "50%",
      width: "50%",
      [theme.breakpoints.up("md")]: {
         height: "75%",
         width: "75%",
      },
      boxShadow: theme.shadows[15],
      border: "4px #64ffda solid",
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
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
         marginBottom: theme.spacing(6),
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
               <Grid item className={classes.marginBottomFour} xs={7} md={6}>
                  <Typography className={classes.text} variant="h5">
                     <span className={classes.greenText}>01.</span> About Me.
                  </Typography>
               </Grid>
               <Grid className={classes.marginBottomFour} item xs={5} md={6}>
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
               <div className={classes.imgContainer}>
                  <img src={meImg} className={classes.img} alt="chinaemerem" />
               </div>
            </Grid>
         </Grid>
      </section>
   );
};

export default About;
