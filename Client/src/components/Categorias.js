import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Categorias({ resultado, nueva, usado, otros, prueba }) {
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FBF159",
      },
    },
    fab: {
      margin: 0,
      top: "auto",
      left: 20,
      bottom: 20,
      right: "auto",
      position: "fixed",
    },
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (resultado) {
    return (
      <div className={classes.root} position="static">
        <ThemeProvider theme={theme}>
          <Button
            position="static"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id="simple-menu"
            position="static"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => nueva("new")}>Nuevo</MenuItem>
            <MenuItem onClick={() => usado("used")}>Usado</MenuItem>
            <MenuItem onClick={() => otros("not_specified")}>Otros</MenuItem>
            <MenuItem onClick={prueba}>Ordenar por Precio</MenuItem>
          </Menu>
        </ThemeProvider>
      </div>
    );
  } else {
    return (
      <div>
        <h6>...</h6>
      </div>
    );
  }
}
