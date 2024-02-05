import React from "react";
import SearchForm from "../SearchForm";

import "../FilterCheckbox/FilterCheckbox.css";

function FilterCheckbox({
  isChecked,
  setIsChecked,
  search,
  setSearch,
  handleGetSavedMovies,
  handleGetMovies,
  savedMovies,
  allMovies,
}) {
  function handleChangeCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <SearchForm
      search={search}
      setSearch={setSearch}
      handleGetSavedMovies={handleGetSavedMovies}
      handleGetMovies={handleGetMovies}
      isChecked={isChecked}
      allMovies={allMovies}
      savedMovies={savedMovies}
    >
      <div onClick={handleChangeCheckbox}>
        {isChecked ? (
          <svg
            width="36"
            height="20"
            viewBox="0 0 36 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="20" rx="10" fill="#343434" />
            <circle cx="26" cy="10" r="8" fill="#2BE080" />
            <circle cx="26" cy="10" r="7.5" stroke="white" />
          </svg>
        ) : (
          <svg
            width="36"
            height="20"
            viewBox="0 0 36 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="20" rx="10" fill="#343434" />
            <circle cx="10" cy="10" r="8" fill="#2F2F2F" />
            <circle cx="10" cy="10" r="7.5" stroke="white" />
          </svg>
        )}
      </div>
      <p className="movies__container_filter-text">Короткометражки</p>
    </SearchForm>
  );
}

export default FilterCheckbox;
