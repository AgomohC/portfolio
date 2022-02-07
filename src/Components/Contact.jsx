import React from "react";
import {
   Grid,
   makeStyles,
   Typography,
   alpha,
   Button,
   IconButton,
} from "@material-ui/core";
import { Twitter, LinkedIn, GitHub, Phone } from "@material-ui/icons";
import classNames from "classnames";

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
   btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: theme.spacing(2),
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
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   paleText: {
      color: alpha("#fff", 0.55),
   },
}));

const Contact = () => {
   const classes = useStyles();
   return (
      <section id="contact" className={classes.container}>
         <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
         >
            <Grid container item alignItems="center" spacing={2} xs={12} md={6}>
               <Grid item className={classes.marginBottomFour} xs={7} md={6}>
                  <Typography className={classes.text} variant="h5">
                     <span className={classes.greenText}>04.</span> Contact.
                  </Typography>
               </Grid>
               <Grid className={classes.marginBottomFour} item xs={5} md={6}>
                  <div className={classes.divider}></div>
               </Grid>
            </Grid>
            <Grid container>
               <Typography
                  variant="h3"
                  className={classes.text}
                  color="initial"
               >
                  Get in Touch
               </Typography>
               <Grid item xs={12}>
                  <Typography
                     variant="body1"
                     className={classNames(
                        classes.marginTopTwo,
                        classes.paleText
                     )}
                     color="initial"
                  >
                     I am currently looking for a role. Want to collaborate on a
                     project, hire me or just say hi?
                  </Typography>
                  <Button
                     color="secondary"
                     variant="outlined"
                     component="a"
                     href="mailto:chinaemerema@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className={classes.marginTopTwo}
                  >
                     Send an Email
                  </Button>
                  <Grid
                     item
                     xs={6}
                     sm={4}
                     md={3}
                     lg={2}
                     className={classes.btnContainer}
                  >
                     <Button
                        color="secondary"
                        component="a"
                        href="https://www.linkedin.com/in/agomohchinaemereme/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <LinkedIn />
                     </Button>
                     <Button
                        color="secondary"
                        component="a"
                        href="https://github.com/AgomohC"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <GitHub />
                     </Button>
                     <Button
                        color="secondary"
                        component="a"
                        href="https://twitter.com/femto_ace"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Twitter />
                     </Button>

                     <Button
                        color="secondary"
                        component="a"
                        href="tel:+23481788390"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Phone />
                     </Button>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </section>
   );
};

export default Contact;
