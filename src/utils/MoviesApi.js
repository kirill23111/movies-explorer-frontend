class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  checkResp(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getAllMovies = () => {
    return fetch(this._url, {
      headers: this._headers,
    }).then((res) => {
      return this.checkResp(res);
    });
  };
}

const api = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
