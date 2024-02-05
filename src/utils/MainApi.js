import { MOVIE_IMAGE_PATH } from "../utils/constants";

class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  checkResp(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getSavedMovies = (token) => {
    return fetch(this._url + "/movies", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this.checkResp(res);
    });
  };

  getUserIfnoApi = (token) => {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this.checkResp(res);
    });
  };

  sendUserIfno = (name, email, token) => {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(name, email),
    }).then((res) => {
      return this.checkResp(res);
    });
  };

  deleteCard = (_id, token) => {
    return fetch(this._url + "/movies/" + _id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return this.checkResp(res);
    });
  };

  savedMovies = (movie, token) => {
    return fetch(this._url + "/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({
        director: movie.director,
        country: movie.country,
        year: movie.year,
        duration: movie.duration,
        image: MOVIE_IMAGE_PATH + movie.image.url,
        description: movie.description,
        trailerLink: movie.trailerLink,
        movieId: movie.id,
        thumbnail: MOVIE_IMAGE_PATH + movie.image.url,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => {
      return this.checkResp(res);
    });
  };
}

const mainApi = new MainApi({
  url: "https://api.diplommoviekirill.nomoredomainsmonster.ru",
});

export default mainApi;
