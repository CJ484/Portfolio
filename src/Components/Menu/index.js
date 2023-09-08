import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../const/paths/routes";
import './index.styles.scss';

const Menu = () => {
      return (
        <Dropdown>
          <Dropdown.Toggle className="menuTitle">Menu</Dropdown.Toggle>
          <Dropdown.Menu>
            {Object.values(routes).map((route) => (
              <Link exact="true" to={route.path}>
                {route.title}
              </Link>
            ))}
              {/* <Link exact="true" to={routes.PORTFOLIO.path}>
                Portfolio
              </Link>
              <Link exact="true" to={routes.CONTACT.path}>
                Contact
              </Link> */}
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default Menu;