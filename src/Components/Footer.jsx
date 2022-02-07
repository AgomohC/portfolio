import React from "react";
import {
   Grid,
   Typography,
   makeStyles,
   IconButton,
   alpha,
} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

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
      backgroundColor: alpha(theme.palette.secondary.main, 0.13)
   },
   text: {
      color: alpha("#fff", 0.85),
      cursor: "pointer",
      marginTop: theme.spacing(2),
      textDecoration: "none",
   },
   paleText: {
      color: alpha("#fff", 0.55),
   },
   waveDivider: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      overflow: "hidden",
      lineHeight: 0,
   },

   svg: {
      position: "relative",
      display: "block",
      width: "calc(100% + 1.3px)",
      height: "81px",
   },

   waveShapeFill: {
      fill: "#64FFDA",
   },
}));

const Footer = () => {
   const classes = useStyles();
   const year = new Date().getFullYear();
   return (
      <footer id="footer" className={classes.container}>
         <Typography
            variant="subtitle1"
            color="initial"
            className={classes.text}
            component="a"
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noopener noreferrer"
         >
            <span className={classes.paleText}>Inspired by</span> Brittany
            Chiang
         </Typography>
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
