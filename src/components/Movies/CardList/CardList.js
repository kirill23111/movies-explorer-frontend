import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./CardList.css";
import MoviesAddition from "../MoviesAddition/MoviesAddition";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  COMPUTER_DISPAY,
  TABLET_DISPAY,
  COUNT_FOR_COMPUTER,
  COUNT_FOR_TABLET,
} from "../../../utils/constants";

function CardList({
  moviesList,
  onMovieLike,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
  cardProps,
  handleGetSavedMovies,
  showMoreBtn = true,
}) {
  const width = useWindowSize();
  const [count, setCount] = useState(4);
  const [addNextMovies, setAddNextMovies] = useState(0);

  const moviesToShow = moviesList?.slice(0, count);
  const isShowMoreVisible = moviesList?.length > moviesToShow?.length;

  function showCountMovies() {
    if (width >= COMPUTER_DISPAY) {
      setCount(COUNT_FOR_COMPUTER);
      setAddNextMovies(4);
    } else if (width <= COMPUTER_DISPAY && width > 950) {
      setCount(COUNT_FOR_TABLET);
      setAddNextMovies(3);
    } else if (width <= 950 && width > 750) {
      setCount(8);
      setAddNextMovies(2);
    } else if (width <= TABLET_DISPAY) {
      setCount(5);
      setAddNextMovies(2);
    }
  }

  useEffect(() => {
    showCountMovies();
  }, [width]);

  function handleAddMovies() {
    showCountMovies();
    setCount(count + addNextMovies);
  }

  return (
    <section className="moviesList">
      <div className="movies__container_films-table">
        {moviesToShow?.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              handleGetSavedMovies={handleGetSavedMovies}
              onMovieLike={onMovieLike}
              onSavedMovie={onSavedMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
              {...cardProps}
            />
          );
        })}
        {!moviesToShow?.length && (
          <p className="nothing-found">Ничего не найдено</p>
        )}
      </div>
      {isShowMoreVisible && showMoreBtn && (
        <MoviesAddition handleAddMovies={handleAddMovies} />
      )}
    </section>
  );
}

export default CardList;
