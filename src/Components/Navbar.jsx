import React, { useContext } from "react";

import { Link, navigate } from "react-router-dom";
import { routes } from "./utils/routes";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { themeState, themeDispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      {}
      <Link to={"/"}>
        <div className="logo-nav">
          <h1 className="logo-first">DH</h1>
          <h1> Odontologos</h1>
        </div>
      </Link>
      <div className="navbar">
        {}
        <Link to={routes.home}>
          <h4 className="link">Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4 className="link">Contactanos</h4>
        </Link>
        <Link to={routes.favs}>
          <h4 className="link">Destacados</h4>
        </Link>
        {}

        <button className="theme-button" onClick={toggleTheme}>
          {themeState.darkMode ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
