import React from "react";
import {
   alpha,
   AppBar,
   makeStyles,
   Toolbar,
   Typography,
   Grid,
} from "@material-ui/core";
import Menu from "./Menu";
import { useGlobalContext } from "../Context/app-context";

import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   root: {
      [theme.breakpoints.up("lg")]: {
         paddingLeft: 96,
         paddingRight: 96,
      },
      overflow: "hidden",
      position: "relative",
   },
   menuItem: {
      color: "#fff",
      textDecoration: "none",
      cursor: "pointer",
      marginLeft: theme.spacing(3),
      "&:hover": {
         color: theme.palette.secondary.main,
      },
   },
   marginRightThree: {
      marginRight: theme.spacing(3),
   },
   number: {
      color: theme.palette.secondary.main,
   },
   transition: {
      transition: "0.5s all ease-out",
   },
   rotate: {
      "&:hover": {
         transform: "Rotate(165deg)",
      },
   },
   increaseSize: {
      "&:hover": {
         transform: "Scale(1.1)",
      },
   },
   flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
}));

const Header = () => {
   const classes = useStyles();
   const { isMenuOpen } = useGlobalContext();

   return (
      <AppBar position="fixed">
         <Toolbar
            className={classes.root}
            id="back-to-top-anchor"
            component="nav"
         >
            <Typography variant="h1">Chinaemerem</Typography>
            <Grid container direction="row">
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  alignItems="center"
               >
                  <Grid className={classes.flex}>
                     <a
                        href="#about"
                        className={classNames(
                           classes.transition,
                           classes.menuItem,
                           classes.increaseSize
                        )}
                     >
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.number}>01. </span>About me
                        </Typography>
                     </a>
                     <a
                        href="#skills"
                        className={classNames(
                           classes.transition,
                           classes.increaseSize,
                           classes.menuItem
                        )}
                     >
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.number}>02. </span>Skills
                        </Typography>
                     </a>
                     <a
                        href="#projects"
                        className={classNames(
                           classes.transition,
                           classes.menuItem,
                           classes.increaseSize
                        )}
                     >
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.number}>03. </span>Projects
                        </Typography>
                     </a>
                     <a
                        href="#contact"
                        className={classNames(
                           classes.transition,
                           classes.menuItem,
                           classes.increaseSize
                        )}
                     >
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.number}>04. </span>Contact
                        </Typography>
                     </a>
                  </Grid>
               </Grid>
            </Grid>
         </Toolbar>
      </AppBar>
   );
};

export default Header;
