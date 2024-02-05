import React from "react";
import { Link } from "react-router-dom";

import profileButton from "../../images/profile.svg";
import "./Sidebar.css";

function Sidebar({ setIsMenuOpen }) {
  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/", text: "Главная" },
    { to: "/movies", text: "Фильмы" },
    { to: "/saved-movies", text: "Сохранённые фильмы" },
  ];

  return (
    <section className="sidebar">
      <div className="sidenav">
        <button
          type="button"
          className="sidebar__button-close"
          onClick={closeSidebar}
        ></button>
        <nav className="sidenav__links">
          {navLinks.map(({ to, text }) => (
            <Link key={to} to={to} className="sidebar__link">
              {text}
            </Link>
          ))}
        </nav>
        <Link to="/profile">
          <img
            src={profileButton}
            alt="Аккаунт"
            className="headerAuthorised__button sidebar__button"
          />
        </Link>
      </div>
    </section>
  );
}

export default Sidebar;
