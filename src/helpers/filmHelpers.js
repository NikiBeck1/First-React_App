
function filterFilmsByDirector (films, director) {
  return films.filter(film => film.director === director);
}

function getListOf(films, key) {
  return films.map(film => film[key]);
}

export { getListOf, filterFilmsByDirector };