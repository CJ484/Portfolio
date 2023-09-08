import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import routes from "../../const/paths/routes";
import './index.style.scss';

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Link exact="true" to={route.path}>
            <MenuItem className="menuItemTitle" onClick={handleClose}>{route.title}</MenuItem>
          </Link>
        ))}
        {/* <Link exact="true" to={routes.ABOUT_ME.path}>
          {" "}
          <MenuItem onClick={handleClose}>About Me</MenuItem>
        </Link>
        <Link exact="true" to={routes.PORTFOLIO.path}>
          {" "}
          <MenuItem onClick={handleClose}>Portfolio</MenuItem>
        </Link>
        <Link exact="true" to={routes.CONTACT.path}>
          {" "}
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link> */}
      </Menu>
    </div>
  );
};

export default NavMenu;
