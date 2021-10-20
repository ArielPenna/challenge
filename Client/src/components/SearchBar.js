import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../Imagenes/logoHenry.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    primary: {
      main: "#115293",
      dark: "#303f9f",
    },
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    fontWeightBold: 700,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const logo = <img id="Logo" src={Logo} alt="#" />;
const SoyHenry = "https://www.soyhenry.com/";

export default function SearchBar({ onSearch, handleClick }) {
  const [categorias, setCategorias] = useState([]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#fbf159" }}>
        <CssBaseline />
        <Toolbar>
          <a href={SoyHenry}>{logo}</a>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography
            className={classes.title}
            color="primary"
            variant="h6"
            noWrap
          ></Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearch(categorias);
                setCategorias("");
              }}
            >
              <InputBase
                placeholder="Buscar…"
                color="primary"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={categorias}
                onChange={(e) => setCategorias(e.target.value)}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
