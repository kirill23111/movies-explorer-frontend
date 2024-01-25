import React from "react";

function MoviesAddition({ handleAddMovies }) {
  return (
    <div className="movies__container-more">
      <p className="movies__container-more-text" onClick={handleAddMovies}>
        Еще
      </p>
    </div>
  );
}

export default MoviesAddition;
