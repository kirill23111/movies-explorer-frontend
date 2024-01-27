import React, { useState, useEffect } from "react";
import { MOVIE_IMAGE_PATH, HOUR } from "../../../utils/constants";

import "../MoviesCard/MoviesCard.css";

function MoviesCard({
  movie,
  onSavedMovie,
  onDeleteMovie,
  isShowLikeBtn = true,
  isShowDeleteBtn = false,
  savedMovies,
  handleGetSavedMovies,
}) {
  const [isLikedMovie, setIsLikeMovie] = useState(false);
  const savedUserMovie = savedMovies?.find((i) => i.nameRU === movie.nameRU);
  const hours = Math.floor(movie.duration / HOUR);
  const minutes = Math.floor(movie.duration % HOUR);
  console.log(savedMovies)
  useEffect(() => {
    if (savedUserMovie) {
      setIsLikeMovie(true);
    }
  }, [savedUserMovie]);

  function handleLikeMovie() {
    onSavedMovie(movie)
      .then(() => {
        setIsLikeMovie(!isLikedMovie);
        // handleGetSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRemoveLike() {
    onDeleteMovie(savedUserMovie._id)
      .then(() => {
        setIsLikeMovie(false);
        // handleGetSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie._id)
      .then(() => {
        setIsLikeMovie(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <article className="movies__container_films-container">
      <div className="movies__container_films-container-data">
        <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
          <img
            src={
              movie.image.url ? MOVIE_IMAGE_PATH + movie.image.url : movie.image
            }
            alt="Фильм"
          />
        </a>
        <div className="movies__container_films-title-box">
          <p className="movies__container_films-container-title">
            {movie.nameRU}
          </p>
          {isLikedMovie ? (
            <svg
              onClick={handleRemoveLike}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#313131" />
              <path
                d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z"
                fill="#EE3465"
              />
            </svg>
          ) : (
            <svg
              onClick={handleLikeMovie}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#313131" />
              <path
                d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className="movies__container_films-container-time">
          <div className="movies__container_films-divider" />
          <p className="movies__container_films-container-time">
            {hours}ч {minutes}м
          </p>
        </div>
      </div>
    </article>
  );
}

export default MoviesCard;
