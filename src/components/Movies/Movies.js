import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";
import CardList from "../Movies/CardList/CardList";
import { DURATION_SHORT_MOVIE } from "../../utils/constants";

import "../Movies/Movies.css";

const getShortMovies = (movies) => {
  return movies?.filter((movie) => {
    return movie.duration <= DURATION_SHORT_MOVIE;
  });
};

const filterMovies = (movies, val) =>
  movies?.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(val.toLowerCase());
  });

function Movies({
  allMovies,
  isChecked,
  setIsChecked,
  search,
  setSearch,
  handleGetSavedMovies,
  handleSearchMovies,
  handleShortMovies,
  isLoading,
  isInfoPopupOpen,
  onMovieLike,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
  firstSearch,
  handleGetMovies,
}) {
  const isSearchEmtpy = !search;
  const moviesList = allMovies
    ? isChecked
      ? filterMovies(getShortMovies(allMovies), search)
      : filterMovies(allMovies, search)
    : null;
  const movies = isSearchEmtpy ? [] : moviesList;

  return (
    <main className="movies">
      <FilterCheckbox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        handleSearchMovies={handleSearchMovies}
        search={search}
        setSearch={setSearch}
        handleShortMovies={handleShortMovies}
        handleGetSavedMovies={handleGetSavedMovies}
        handleGetMovies={handleGetMovies}
        savedMovies={savedMovies}
      ></FilterCheckbox>
      <CardList
        moviesList={movies}
        onMovieLike={onMovieLike}
        isLoading={isLoading}
        isChecked={isChecked}
        isInfoPopupOpen={isInfoPopupOpen}
        onSavedMovie={onSavedMovie}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        handleGetSavedMovies={handleGetSavedMovies}
        firstSearch={firstSearch}
      />
    </main>
  );
}

export default Movies;