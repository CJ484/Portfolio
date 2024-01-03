import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch/index";
import routes from "../../const/paths/routes";
import "./index.style.scss";
import { instagram, twitter, youtube, openOn } from "../../assets/symbols";

const MobileMenu = ({sidebar, setSidebar, setTheme}) => {
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <div id="mobileMenu" className={sidebar ? "mobileMenu theme active" : "mobileMenu theme"}>
      <div className="topMenu">
        <ThemeSwitch setTheme={setTheme}/>
        <img src={openOn} alt="menu on" onClick={() => showSideBar()}/>
      </div>
      
      <div className="mobileMenuSection">
        <h3>Menu</h3>
        {Object.values(routes).map((route) => (
          <Link key={route.title} exact="true" to={route.path} onClick={() => showSideBar()}>
            <h4 className="mobileMenuItem">{route.title}</h4>
          </Link>
        ))}
        <div className="mobileLinks">
          <div className="social">
            <img className="links" src={instagram} alt="instagram" />
          </div>
          <div className="social">
            <img className="links" src={twitter} alt="twitter" />
          </div>
          <div className="social">
            <img className="links" src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
