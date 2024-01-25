import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

import "../Profile/Profile.css";

function Profile({ onUpdateUser, errorAuth, handleSignout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } =
    useFormWithValidation();

  const [isDisabled, setIsDisabled] = useState(false);
  const isChanged =
    values.name !== currentUser.name || values.email !== currentUser.email;

  React.useEffect(() => {
    console.log({ currentUser });
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    onUpdateUser({ name: values.name, email: values.email });
  }

  function onEditDataUser(e) {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h2 className="profile__container-header">
          Привет, {currentUser.name}!
        </h2>
        <form
          className="profile__container-info"
          name="authorization-form"
          onSubmit={handleSubmit}
        >
          <div className="profile__container-box">
            <p className="profile__container-box-text">Имя</p>
            <input
              className="profile__container-box-text"
              id="name-input"
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name || ""}
              minLength="2"
              maxLength="30"
              pattern="[A-Za-zА-Яа-яЁё\- ]{1,}"
              placeholder="Имя"
              disabled={!isDisabled}
              required
            />
            <span className="login__error" id="name-input-error">
              {errors.name || ""}
            </span>
          </div>
          <div className="profile__container-box">
            <span className="profile__container-box-text">E-mail</span>
            <input
              className="profile__container-box-text"
              id="email-input"
              name="email"
              type="email"
              pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
              value={values.email || ""}
              onChange={handleChange}
              disabled={!isDisabled}
              placeholder="E-mail"
              required
            />
            <span className="login__error" id="email-input-error">
              {errors.email || ""}
            </span>
          </div>
        </form>
        <span className="authorization__button-error authorization__button-error_active">
          {errorAuth}
        </span>
        <div className="profile__container-button-block">
          <div
            className="profile__container-button-change"
            onClick={onEditDataUser}
          >
            Редактировать
          </div>
          {isDisabled && (
            <div
              type="submit"
              className="profile__container-button-logout"
              disabled={!isValid || !isChanged}
              name="submit_btn"
              value="Сохранить"
              onClick={handleSubmit}
            >
              Сохранить
            </div>
          )}
          <div
            className="profile__container-button-logout"
            onClick={handleSignout}
          >
            Выйти из аккаунта
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
