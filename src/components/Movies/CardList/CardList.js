import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./CardList.css";
import MoviesAddition from "../MoviesAddition/MoviesAddition";
import useWindowSize from "../../../hooks/useWindowSize";
import {
  COMPUTER_DISPAY,
  TABLET_DISPAY,
  COUNT_FOR_COMPUTER,
  COUNT_FOR_TABLET,
} from "../../../utils/constants";
import { useLocation } from "react-router-dom";


function CardList({
  moviesList,
  onMovieLike,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
  cardProps,
  isLoading,
  isSearchEmtpy,
  search,
  handleGetSavedMovies,
  showMoreBtn = true,
}) {
  const width = useWindowSize();
  const [count, setCount] = useState(null);
  const [addNextMovies, setAddNextMovies] = useState(0);
  const [likedMovies, setLikedMovies] = useState([]);
  const location = useLocation();

  const moviesToShow = moviesList?.slice(
    0,
    location.pathname === "/saved-movies" ? moviesList.length : count,
  );
  const isShowMoreVisible = moviesList?.length > moviesToShow?.length;


  function setCountMovies(settedCountMovies) {
    if (count === null) {
      const defaultCountMovies = getDefaultCountMovies();

      setCount(defaultCountMovies.count + settedCountMovies);
      setAddNextMovies(defaultCountMovies.addNextMovies);
      return;
    }

    setCount(count + settedCountMovies);
  }

  function setDefaultMovies() {
    const defaultCountMovies = getDefaultCountMovies();

    setCount(defaultCountMovies.count);
    setAddNextMovies(defaultCountMovies.addNextMovies);
  }

  function getDefaultCountMovies() {
    if (width >= COMPUTER_DISPAY) {
      return {
        count: COUNT_FOR_COMPUTER,
        addNextMovies: 4
      };
    } else if (width <= COMPUTER_DISPAY && width > 950) {
      return {
        count: COUNT_FOR_TABLET,
        addNextMovies: 3
      };
    } else if (width <= 950 && width > 768) {
      return {
        count: 8,
        addNextMovies: 2
      };
    } else if (width <= TABLET_DISPAY) {
      return {
        count: 5,
        addNextMovies: 2
      };
    }

    // defaultValue
    return {
      count: 5,
      addNextMovies: 2
    }
  }

  useEffect(() => {
    setDefaultMovies();
  }, []);

  useEffect(() => {
    setDefaultMovies();
  }, [ search ]);

  useEffect(() => {
    setCountMovies(0);
  }, [width]);


  function handleAddMovies() {
    setCountMovies(addNextMovies);
  }

  return (
    <section className="moviesList">
      <div className="movies__container_films-table">
        <Preloader isLoading={isLoading} />
        {moviesList?.slice(0, count)?.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            handleGetSavedMovies={handleGetSavedMovies}
            onMovieLike={onMovieLike}
            onSavedMovie={onSavedMovie}
            onDeleteMovie={onDeleteMovie}
            savedMovies={savedMovies}
            search={search}
            {...cardProps}
          />
        ))}
        {!isSearchEmtpy &&
          !isLoading &&
          !moviesList?.slice(0, count)?.length &&
          moviesList !== null && (
            <p className="nothing-found">Ничего не найдено</p>
          )}
      </div>
      {/* {isShowMoreVisible && moviesList?.length > count && showMoreBtn && ( */}
      {isShowMoreVisible && showMoreBtn && (
        <MoviesAddition handleAddMovies={handleAddMovies} />
      )}
    </section>
  );
}

export default CardList;
