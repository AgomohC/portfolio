import React from "react";
import { Grid, makeStyles, Paper, Typography, Button } from "@material-ui/core";
import { useGlobalContext } from "../Context/app-context";
import classNames from "classnames";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   container: {
      transition: "0.3s all ease-out",
      minHeight: "100vh",
      position: "fixed",
      width: "75vw",
      top: 0,
      right: (props) => (props.isMenuOpen ? "0%" : "-100%"),
      zIndex: 1111,
      backgroundColor: theme.palette.primary.main,
   },
   menuContainer: {
      marginTop: theme.spacing(10),
   },
   menuItem: {
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",

      "&:hover": {
         color: theme.palette.secondary.main,
      },
   },
   transition: {
      transition: "0.5s all ease-out",
   },

   increaseSize: {
      "&:hover": {
         transform: "Scale(1.1)",
      },
   },
   hideDesktop: {
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
   },
   number: {
      color: theme.palette.secondary.main,
      display: "block",
      textAlign: "center",
   },
   icon: {
      position: "absolute",
      top: 24,
      right: 24,
      cursor: "pointer",
      color: theme.palette.secondary.main,
      "&:hover": {
         color: "#fff",
      },
   },
   rotate: {
      "&:hover": {
         transform: "Rotate(180deg)",
      },
   },
   btn: {
      marginTop: theme.spacing(4),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
   },
}));

const Menu = () => {
   const { isMenuOpen, closeMenu } = useGlobalContext();
   const props = { isMenuOpen };
   const classes = useStyles(props);
   return (
      <Paper
         component="aside"
         square
         className={classNames(classes.hideDesktop, classes.container)}
      >
         <Close
            className={classNames(
               classes.transition,
               classes.rotate,
               classes.icon
            )}
            onClick={() => closeMenu()}
         />
         <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.menuContainer}
         >
            <Grid
               item
               className={classNames(classes.transition, classes.increaseSize)}
            >
               <a href="#about" className={classes.menuItem}>
                  <Typography variant="subtitle2" color="initial">
                     <span className={classes.number}>01. </span>About me
                  </Typography>
               </a>
            </Grid>
            <Grid
               item
               className={classNames(classes.transition, classes.increaseSize)}
            >
               <a href="#skills" className={classes.menuItem}>
                  <Typography variant="subtitle2" color="initial">
                     <span className={classes.number}>02. </span>Skills
                  </Typography>
               </a>
            </Grid>
            <Grid
               item
               className={classNames(classes.transition, classes.increaseSize)}
            >
               <a href="#projects" className={classes.menuItem}>
                  <Typography variant="subtitle2" color="initial">
                     <span className={classes.number}>03. </span>
                     Projects
                  </Typography>
               </a>
            </Grid>
            <Grid
               item
               className={classNames(classes.transition, classes.increaseSize)}
            >
               <a href="#contact" className={classes.menuItem}>
                  <Typography variant="subtitle2" color="initial">
                     <span className={classes.number}>04. </span>
                     Contact
                  </Typography>
               </a>
            </Grid>
            <Button
               className={classes.btn}
               variant="outlined"
               color="secondary"
            >
               my cv
            </Button>
         </Grid>
      </Paper>
   );
};

export default Menu;
