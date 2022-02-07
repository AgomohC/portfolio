import React from "react";
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
   },
}));
const Projects = () => {
   const classes = useStyles();
   return (
      <section id="projects" className={classes.container}>
         <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
         >
            <Grid container item alignItems="center" spacing={2} xs={12} md={6}>
               <Grid item className={classes.marginBottomFour} xs={7} md={6}>
                  <Typography className={classes.text} variant="h5">
                     <span className={classes.greenText}>03.</span> Projects.
                  </Typography>
               </Grid>
               <Grid className={classes.marginBottomFour} item xs={5} md={6}>
                  <div className={classes.divider}></div>
               </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={4}>
               <Grid item xs={6} sm={4} md={3}>
                  <Card className={classes.card}>
                     <CardMedia title="#" image="#" />
                     <CardContent></CardContent>
                     <CardActions>
                        <Button
                           component="a"
                           target="_blank"
                           href="#"
                           rel="noopener noreferrer"
                           color="secondary"
                           variant="contained"
                        >
                           <Link />
                        </Button>
                        <Button
                           component="a"
                           target="_blank"
                           href="#"
                           rel="noopener noreferrer"
                           color="secondary"
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
