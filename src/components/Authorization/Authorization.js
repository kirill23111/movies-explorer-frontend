import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

function Authorization({
  title,
  children,
  textButton,
  text,
  path,
  textLink,
  handleSubmit,
  isDisabled = false,
  errorAuth,
  setErrorAuth,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isRedirect = !!Object.keys(currentUser).length;

  useEffect(() => {
    return () => setErrorAuth("");
  }, []);

  if (isRedirect) return <Navigate to="/" />;

  return (
    <section className="login">
      <div className="login__container">
        <HeaderLogo />
        <h1 className="login__container-header">{title}</h1>

        <form className="login__form" onSubmit={handleSubmit}>
          {children}
          <span className="common-link_orange">{errorAuth}</span>
          <button
            type="submit"
            className="login__button login__button-login"
            disabled={isDisabled}
            name="submit_btn"
            onSubmit={handleSubmit}
            value={textButton}
          >
            {textButton}
          </button>
        </form>
        <div className="login__container-question-block">
          <p className="login__container-button-question">{text}</p>
          <Link to={path} className="login__container-button-register">
            {textLink}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Authorization;
