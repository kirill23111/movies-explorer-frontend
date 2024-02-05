import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logoHeader from "../../images/logo__header.svg";
import "../Header/Header.css";

function Header({ loggedIn }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (loggedIn) {
    return <Navigation />;
  }

  return (
    isHomePage && (
      <header className="header">
        <Link to="/" className="header__logo"></Link>
        <div className="header__container">
          <img src={logoHeader} alt="Логотип" className="header__logo" />
          <nav className="header__container-right">
            <Link to={"/sign-up"} className="header__link header__link_reg">
              {"Регистрация"}
            </Link>
            <Link to={"/sign-in"} className="header__link">
              <button type="button" className="header__button">
                Войти
              </button>
            </Link>
          </nav>
        </div>
      </header>
    )
  );
}

export default Header;
