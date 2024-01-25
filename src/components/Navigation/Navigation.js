import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "../Navigation/Navigation.css";
import logoHeader from "../../images/logo__header.svg";
import burger from "../../images/burger.svg";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <div
        className={`headerAuthorised ${
          location.pathname !== "/"
            ? "headerAuthorised_white"
            : "headerAuthorised_blue"
        }`}
      >
        <div className="headerAuthorised__container">
          <NavLink to={"/"}>
            <img
              src={logoHeader}
              alt="Логотип"
              className="headerAuthorised__logo"
            />
          </NavLink>
          <nav className="headerAuthorised__container-middle">
            <NavLink
              to={"/movies"}
              className={({ isActive }) =>
                `headerAuthorised__link ${
                  isActive && "headerAuthorised__link-active"
                }`
              }
            >
              {"Фильмы"}
            </NavLink>
            <NavLink
              to={"/saved-movies"}
              className={({ isActive }) =>
                `headerAuthorised__link ${
                  isActive && "headerAuthorised__link-active"
                }`
              }
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink to="/profile">
              <div className="header-info__container">
                <p className="header-info__container-text">Аккаунт</p>
                <div className="header-info__image"></div>
              </div>
            </NavLink>
          </nav>
          <button
            type="button"
            className="headerAuthorised__nav-mobile"
            onClick={() => setIsMenuOpen(true)}
          >
            <img
              src={burger}
              alt="Иконка меню"
              className="headerAuthorised__icon-menu"
            />
          </button>
        </div>
      </div>
      <div>{isMenuOpen && <Sidebar setIsMenuOpen={setIsMenuOpen} />}</div>
    </>
  );
}

export default Navigation;
