// import React from "react";
import React, { useRef, useEffect } from "react";

import "../SearchForm/SearchForm.css";
import { useLocation } from "react-router-dom";
import {useFormWithValidation} from '../../../hooks/useForm';

function SearchForm({
  search,
  setSearch,
  children,
  handleGetSavedMovies,
  handleGetMovies,
  savedMovies,
}) {
  const {  resetForm } = useFormWithValidation();
  const location = useLocation();
  const [errors, setErrors] = React.useState("");
  const [val, setVal] = React.useState(" ");
  const firstInput = useRef(null);

  React.useEffect(() => {
    (async () => {
      if (localStorage.getItem("search")) {
        if (location.pathname === "/movies") {
          setSearch(JSON.parse(localStorage.getItem("search")));
          setVal(JSON.parse(localStorage.getItem("search")));
        }
        setTimeout(() => {
          handleFormSubmit();
        }, 100);
      }
    })();
  }, []);

  const handleFormSubmit = async (evt) => {
    evt?.preventDefault();

    if (!savedMovies?.length) {
      await handleGetSavedMovies();
      if (handleGetMovies) await handleGetMovies();
      setErrors("");
      // Проверка на пустое значение
      if (!val.trim()) {
        setErrors("Нужно ввести ключевое слово");
        return;
      }

      setErrors("");  // Сброс ошибки
      setSearch(val);
      // localStorage.setItem("search", JSON.stringify(val));
    } else {
      // Добавлено: проверка на пустое значение
      // if (!val.trim()) {
      //   setErrors("Нужно ввести ключевое слово");
      //   return;
      // }

      setErrors("");  // Сброс ошибки

      if (val !== " ") {
        setSearch(val);
        localStorage.setItem("search", JSON.stringify(val));
      } else {
        if (location.pathname === "/movies") {
          setSearch(JSON.parse(localStorage.getItem("search")) || " ");
        }
      }
    }
  };


  React.useEffect(() => {
    firstInput.current.focus();
    resetForm(
      localStorage.searchRequest ? JSON.parse(localStorage.searchRequest) : {}
    );
  }, [firstInput]);

  const handleInputChange = (evt) => {
    setVal(evt.target.value);
  };

  return (
    <div className="movies__container_search">
      <div className="movies__container_search-block">
        <div className="movies__container_searching">
          <div className="movies__container_search-icon">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7927 18.2638C17.3608 19.6957 15.0392 19.6957 13.6073 18.2638C12.1754 16.8318 12.1754 14.5102 13.6073 13.0783C15.0392 11.6464 17.3608 11.6464 18.7927 13.0783C20.2247 14.5102 20.2247 16.8318 18.7927 18.2638ZM19.2331 19.6467C17.2729 21.1461 14.4573 20.9994 12.6645 19.2066C10.7119 17.254 10.7119 14.0881 12.6645 12.1355C14.6171 10.1829 17.7829 10.1829 19.7355 12.1355C21.5283 13.9283 21.6751 16.7437 20.1759 18.7039L23.7426 22.2706L22.7998 23.2134L19.2331 19.6467Z"
                fill="#A0A0A0"
              />
            </svg>
          </div>
          <input
            ref={firstInput}
            className="movies__container_searching-input"
            placeholder="Фильм"
            value={val.trim() || ""}
            onChange={handleInputChange}
            required={true}
          />
        </div>

        <div className="movies__container_filter">
          <div
            onClick={handleFormSubmit}
            className="movies__container_filter-button"
          >
            <p className="movies__container_filter-button-text">Найти</p>
          </div>
          <div className="movies__container_filter-line" />
          <div className="movies__container_filter-box">{children}</div>
        </div>
      </div>
      <p className="movies__input-error">{errors}</p>
    </div>
  );
}

export default SearchForm;

// const handleFormSubmit = async (evt) => {
//   evt?.preventDefault();

//   if (!savedMovies?.length) {
//     await handleGetSavedMovies();
//     if (handleGetMovies) await handleGetMovies();
//     setSearch(val);
//     localStorage.setItem("search", JSON.stringify(val));  // Добавлено сохранение в localStorage
//   } else {
//     if (!search) {
//       setErrors("Нужно ввести ключевое слово");
//       return;
//     }
//     setErrors("");
//     if (val !== " ") {
//       setSearch(val);
//       localStorage.setItem("search", JSON.stringify(val));  // Добавлено сохранение в localStorage
//     } else {
//       if (location.pathname === "/movies") {
//         setSearch(JSON.parse(localStorage.getItem("search")) || " ");
//       }
//     }
//   }
// };