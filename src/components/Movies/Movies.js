import FilterCheckbox from "../Movies/SearchForm/FilterCheckbox/FilterCheckbox";
import CardList from "../Movies/CardList/CardList";
import { DURATION_SHORT_MOVIE } from "../../utils/constants";

import "../Movies/Movies.css";
import { useEffect } from "react";

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
  const isSearchEmtpy = !search.trim();
  const moviesList = allMovies
    ? isChecked
      ? filterMovies(getShortMovies(allMovies), search)
      : filterMovies(allMovies, search)
    : JSON.parse(localStorage.getItem("searchedMovies")) || null;
  const movies = isSearchEmtpy ? [] : moviesList;

  console.log({
    movies,
    moviesList,
    saved: localStorage.getItem("searchedMovies"),
  });

  useEffect(() => {
    // if (!allMovies?.length) handleGetMovies();
    return () => {
      setSearch("");
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('searchedMovies', JSON.stringify(movies));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [movies]);
  // console.log({search, movies, allMovies})
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
        isSearchEmtpy={isSearchEmtpy}
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
