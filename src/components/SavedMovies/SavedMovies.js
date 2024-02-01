import React, { useEffect, useState } from "react";
import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";
import CardList from "../Movies/CardList/CardList";
import { DURATION_SHORT_MOVIE } from "../../utils/constants";

import "../SavedMovies/SavedMovies.css";

const filterMovieList = (list, value) => {
  if (!value) return list;
  return list.filter((movie) =>
    movie.nameRU.toLowerCase().includes(value.toLowerCase())
  );
};

const getShortMovies = (list) =>
  list.filter((movie) => movie.duration <= DURATION_SHORT_MOVIE);

function SavedMovies({
  isChecked,
  isInfoPopupOpen,
  onSavedMovie,
  onMovieLike,
  onDeleteMovie,
  savedMovies,
  handleGetSavedMovies,
  isLoading,
}) {
  const [isCheckedQuery, setIsCheckedQuery] = useState(false);
  const [searchSavedMovie, setSearchSavedMovie] = useState("");

  const isSearchEmpty = !searchSavedMovie.trim();

  const moviesList = savedMovies || [];
  const filteredMoviesList = isCheckedQuery
    ? filterMovieList(getShortMovies(moviesList), searchSavedMovie.trim())
    : filterMovieList(moviesList, searchSavedMovie.trim());

  useEffect(() => {
    handleGetSavedMovies();
  }, []);

  return (
    <main className="movies">
      <FilterCheckbox
        isChecked={isCheckedQuery}
        setIsChecked={setIsCheckedQuery}
        search={searchSavedMovie}
        setSearch={setSearchSavedMovie}
        handleGetSavedMovies={handleGetSavedMovies}
        savedMovies={savedMovies}
      ></FilterCheckbox>
      <CardList
        isLoading={isLoading}
        savedMovies={savedMovies}
        moviesList={filteredMoviesList}
        isSearchEmtpy={isSearchEmpty}
        onMovieLike={onMovieLike}
        isChecked={isChecked}
        isInfoPopupOpen={isInfoPopupOpen}
        onSavedMovie={onSavedMovie}
        onDeleteMovie={onDeleteMovie}
        cardProps={{
          isShowLikeBtn: false,
          isShowDeleteBtn: true,
        }}
        showMoreBtn={false}
      />
    </main>
  );
}

export default SavedMovies;
