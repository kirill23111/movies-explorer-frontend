import React from "react";
import Authorization from "../Authorization/Authorization";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({
  onRegister,
  isSubmitError,
  errorAuth,
  setErrorAuth,
  isLoading,
}) {
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <Authorization
      type="register"
      title="Добро пожаловать!"
      textButton="Зарегистрироваться"
      text="Уже зарегистрированы?"
      pathEdit=""
      path="/sign-in"
      textLink="Войти"
      handleSubmit={handleSubmit}
      isDisabled={!isValid || isLoading}
      isSubmitError={isSubmitError}
      errorAuth={errorAuth}
      setErrorAuth={setErrorAuth}
    >
      <div className="login__container-box">
        <label className="login__container-box-text">Имя</label>
        <input
          className="login__container-box-input"
          id="name-input"
          name="name"
          type="text"
          onChange={handleChange}
          disabled={isLoading}
          value={values.name || ""}
          minLength="2"
          maxLength="30"
          pattern="[A-Za-zА-Яа-яЁё\- ]{1,}"
          placeholder="Имя"
          required
        />
        <span className="login__error" id="name-input-error">
          {errors.name || ""}
        </span>
      </div>

      <div className="login__container-box">
        <label className="login__container-box-text">E-mail</label>
        <input
          className="login__container-box-input"
          id="email-input"
          name="email"
          type="email"
          pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          value={values.email || ""}
          onChange={handleChange}
          placeholder="E-mail"
          required
          disabled={isLoading}
        />
        <span className="login__error" id="email-input-error">
          {errors.email || ""}
        </span>
      </div>
      <div className="login__container-box">
        <label className="login__container-box-text">Пароль</label>
        <input
          className="login__container-box-input"
          id="password-input"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password || ""}
          placeholder="Пароль"
          required
          disabled={isLoading}
        />
        <span className="login__error" id="password-input-error">
          {errors.password || ""}
        </span>
      </div>
    </Authorization>
  );
}

export default Register;
