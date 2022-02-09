import React from "react";
import {
   alpha,
   AppBar,
   makeStyles,
   Toolbar,
   Typography,
   Grid,
   IconButton,
} from "@material-ui/core";
import Menu from "./Menu";
import { useGlobalContext } from "../Context/app-context";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
   root: {
      [theme.breakpoints.up("lg")]: {
         paddingLeft: 96,
         paddingRight: 96,
      },
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
   number: {
      color: theme.palette.secondary.main,
   },
   transition: {
      transition: "0.5s all ease-out",
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
   hideDesktop: {
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
   },
   hdeMobile: {
      display: "none",
      [theme.breakpoints.up("md")]: {
         display: "flex",
      },
   },
   icon: {
      transition: "0.3s all ease-out",
      color: theme.palette.secondary.main,
      "&:hover": {
         color: "#fff",
         transform: "Rotate(90deg)",
      },
   },
   overlay: {
      transition: "0.3s all ease-out",
      position: "fixed",
      top: 0,
      right: 0,
      zIndex: (props) => (props.isMenuOpen ? 1110 : -1110),
      height: "100vh",
      width: "100vw",
      backgroundColor: alpha(theme.palette.primary.main, 0.3),
      backdropFilter: "blur(4px)",
      "-webkit-backdrop-filter": "blur(4px)",
   },
}));

const Header = () => {
   const { openMenu, isMenuOpen, closeMenu } = useGlobalContext();
   const props = { isMenuOpen };
   const classes = useStyles(props);
   return (
      <>
         <AppBar position="static">
            <Toolbar
               className={classes.root}
               id="back-to-top-anchor"
               component="nav"
            >
               <Typography variant="h1">chinaemerem</Typography>
               <Grid container direction="row">
                  <Grid
                     item
                     container
                     justifyContent="flex-end"
                     alignItems="center"
                  >
                     <IconButton
                        onClick={() => openMenu()}
                        className={classes.hideDesktop}
                     >
                        <MenuIcon className={classes.icon} />
                     </IconButton>
                     <Grid
                        className={classNames(classes.hdeMobile, classes.flex)}
                     >
                        <Link
                           href="#about"
                           className={classNames(
                              classes.transition,
                              classes.menuItem,
                              classes.increaseSize
                           )}
                           to="about"
                           spy={false}
                           smooth={true}
                           duration={500}
                        >
                           <Typography variant="subtitle2" color="initial">
                              <span className={classes.number}>01. </span>About
                              me
                           </Typography>
                        </Link>
                        <Link
                           href="#skills"
                           className={classNames(
                              classes.transition,
                              classes.increaseSize,
                              classes.menuItem
                           )}
                           to="skills"
                           spy={false}
                           smooth={true}
                           duration={600}
                        >
                           <Typography variant="subtitle2" color="initial">
                              <span className={classes.number}>02. </span>Skills
                           </Typography>
                        </Link>
                        <Link
                           href="#projects"
                           className={classNames(
                              classes.transition,
                              classes.menuItem,
                              classes.increaseSize
                           )}
                           to="projects"
                           spy={false}
                           smooth={true}
                           duration={700}
                        >
                           <Typography variant="subtitle2" color="initial">
                              <span className={classes.number}>03. </span>
                              Projects
                           </Typography>
                        </Link>
                        <Link
                           href="#contact"
                           className={classNames(
                              classes.transition,
                              classes.menuItem,
                              classes.increaseSize
                           )}
                           to="contact"
                           spy={false}
                           smooth={true}
                           duration={800}
                        >
                           <Typography variant="subtitle2" color="initial">
                              <span className={classes.number}>04. </span>
                              Contact
                           </Typography>
                        </Link>
                     </Grid>
                  </Grid>
               </Grid>
            </Toolbar>
         </AppBar>
         <Menu />
         <div
            onClick={() => closeMenu()}
            className={classNames(classes.hideDesktop, classes.overlay)}
         ></div>
      </>
   );
};

export default Header;
