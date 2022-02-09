import React from "react";
import { Typography, makeStyles, alpha } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: "auto",
      padding: theme.spacing(10),
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: "8px 8px 0 0",
      position: "relative",
      backgroundColor: alpha(theme.palette.secondary.main, 0.13),
   },
   text: {
      color: alpha("#fff", 0.85),
      cursor: "pointer",
      marginTop: theme.spacing(2),
      textDecoration: "none",
   },
}));

const Footer = () => {
   const classes = useStyles();
   const year = new Date().getFullYear();
   return (
      <footer id="footer" className={classes.container}>
         <Typography
            className={classes.text}
            variant="subtitle2"
            color="initial"
         >
            Chinaemerem Agomoh
         </Typography>
         <Typography
            className={classes.text}
            variant="subtitle2"
            color="initial"
         >
            © {year}
         </Typography>
      </footer>
   );
};

export default Footer;
