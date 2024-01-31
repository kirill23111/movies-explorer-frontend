import React from "react";

function MoviesAddition({ handleAddMovies }) {
  return (
    <div className="movies__container-more" onClick={handleAddMovies}>
      <p className="movies__container-more-text">
        Еще
      </p>
    </div>
  );
}

export default MoviesAddition;
