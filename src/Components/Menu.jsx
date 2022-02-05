import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { useGlobalContext } from "../Context/app-context";

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
}));

const Menu = () => {
   const { isMenuOpen } = useGlobalContext();
   const props = { isMenuOpen };
   const classes = useStyles(props);
   return (
      <Paper component="aside" square className={classes.container}></Paper>
   );
};

export default Menu;
