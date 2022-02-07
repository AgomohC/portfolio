import React from "react";
import { Grid, makeStyles, Typography, alpha } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   container: {
      height: "auto",
      paddingTop: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingLeft: theme.spacing(5),
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
         paddingLeft: theme.spacing(10),
      },
   },
   imgContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: alpha("#fff", 0.85),
      margin: theme.spacing(1),
      borderRadius: 8,
      padding: theme.spacing(2),
      boxShadow: theme.shadows[24],
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
   express: {
      height: 50,
      width: 50,
      transform: "Scale(1.2)",

      [theme.breakpoints.up("lg")]: {
         transform: "Scale(1.5)",
      },
   },
}));
const Skills = () => {
   const classes = useStyles();

   return (
      <section id="skills" className={classes.container}>
         <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
         >
            <Grid container item alignItems="center" spacing={2} xs={12} md={6}>
               <Grid item className={classes.marginBottomFour} xs={7} md={6}>
                  <Typography className={classes.text} variant="h5">
                     <span className={classes.greenText}>02.</span> Skills.
                  </Typography>
               </Grid>
               <Grid className={classes.marginBottomFour} item xs={5} md={6}>
                  <div className={classes.divider}></div>
               </Grid>
            </Grid>
            <Grid container justifyContent="space-evenly" alignItems="center">
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png"
                     alt="HTML"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/css3.png"
                     alt="css3"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/javascript--v1.png"
                     alt="Javascript"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/bootstrap.png"
                     alt="Bootstrap"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/ultraviolet/50/000000/react--v1.png"
                     alt="React"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/material-ui.png"
                     alt="material-ui"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/redux.png"
                     alt="redux"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/nodejs.png"
                     alt="nodejs"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                     alt="expressjs"
                     className={classes.express}
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/mongodb.png"
                     alt="mongodb"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/color/50/000000/git.png"
                     alt="git"
                  />
               </Grid>
               <Grid item xs={3} sm={2} lg={1} className={classes.imgContainer}>
                  <img
                     src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png"
                     alt="postman"
                  />
               </Grid>
            </Grid>
         </Grid>
      </section>
   );
};

export default Skills;
