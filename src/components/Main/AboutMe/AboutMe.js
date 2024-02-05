import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../../images/avatar.jpg";
import "./AboutMe.css";

const PortfolioItem = ({ title, link }) => (
  <div className="about-me__portfolio-box">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="about-me__portfolio-title-link"
    >
      <p className="about-me__portfolio-title">{title}</p>
      <img
        src={require("../../../images/arrowLink.svg").default}
        alt="Ссылка"
        className="about-me__portfolio-link-img"
      />
    </a>
    <div className="about-me__divider-dark" />
  </div>
);

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me__title-container">
        <p className="about-me__title">Студент</p>
        <div className="about-me__divider" />
      </div>
      <div className="about-me__container">
        <div className="about-me__container-first">
          <img className="about-me__image-mobile" src={avatar} alt="Студент" />
          <div className="about-me__container-info">
            <div className="about-me__info">
              <h2 className="about-me__info-title">Виталий</h2>
              <h3 className="about-me__info-subtitle">
                Фронтенд-разработчик, 30 лет
              </h3>
              <p className="about-me__info-text">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <Link
              className="about-me__link"
              target="_blank"
              to="https://github.com/kirill23111"
            >
              Github
            </Link>
          </div>
          <img className="about-me__image" src={avatar} alt="Студент" />
        </div>
        <div className="about-me__container-second">
          <p className="about-me__container-title">Портфолио</p>
          <div className="about-me-portfolio-container">
            <PortfolioItem
              title="Статичный сайт"
              link="https://kirill23111.github.io/how-to-learn/"
            />
            <PortfolioItem
              title="Адаптивный сайт"
              link="https://kirill23111.github.io/russian-travel/"
            />
            <PortfolioItem
              title="Одностраничное приложение"
              link="https://mestoproject.nomoredomainsmonster.ru"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
