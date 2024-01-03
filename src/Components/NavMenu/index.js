import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import routes from "../../const/paths/routes";
import "./index.style.scss";
import { ThemeProvider, createTheme, Menu, MenuItem } from "@mui/material";


const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    overrides: {
      MuiMenu: {
        paper: {
          backgroundColor: "black",
        },
      },
    },
  });


  return (
    <div className="navMenu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Menu
        </Button>
        <ThemeProvider theme={theme}>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {Object.values(routes).map((route) => (
            <Link className="menuItemLinks" key={route.title} exact="true" to={route.path}>
              <MenuItem className="menuItemTitle underlineWord" onClick={handleClose}>
                {route.title}
              </MenuItem>
            </Link>
          ))}
        </Menu>
          </ThemeProvider>
      </div>
  );
};

export default NavMenu;
