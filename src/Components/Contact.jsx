import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

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
}));

const Contact = () => {
   const classes = useStyles();
   return <section id="contact" className={classes.container}></section>;
};

export default Contact;
