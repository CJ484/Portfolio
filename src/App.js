import { useState } from "react";
import { NavMenu, ThemeSwitch } from "./Components";
import { Routes, Route, Link } from "react-router-dom";
import { openOff } from "./assets/symbols";
import routes from "./const/paths/routes";
import { MobileMenu } from "./Components";
import "./App.styles.scss";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [theme, setTheme] = useState(`default-theme`);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <div className={"App " + theme}>
      <div className="nav">
        <div className="header">
          <Link exact="true" to={routes.HOME.path}>
            <h2 className="underline-word">Carlos Coreas.</h2>
          </Link>
          <div className="nonMobileMenu">
            <NavMenu />
          </div>
        </div>
        <div className="mobileHeader">
          <Link exact="true" to={routes.HOME.path}>
            <h2 className="underline-word">Carlos Coreas.</h2>
          </Link>
          <img src={openOff} alt="hamburgerMenu" onClick={() => showSideBar()}/>
        </div>
        <div className="mobileMenu">
          <MobileMenu sidebar={sidebar} setSidebar={setSidebar} setTheme={setTheme}/>
        </div>
        <div className="nonMobileMenu">
          <ThemeSwitch setTheme={setTheme}/>
        </div>
      </div>
      <div className="route-container">
        <Routes>
          {Object.values(routes).map((route) => (
            <Route
              key={route.title}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
