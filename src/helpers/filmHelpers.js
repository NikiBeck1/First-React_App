
function filterFilmsByDirector (films, director) {
  return films.filter(film => film.director === director);
}

function getListOf(films, key) {
  return films.map(film => film[key]);
}

function getFilmStats(films, key) {
  return Object.fromEntries(
    films.map(film => [film.title, film[key]])
  );
}


export { getListOf, filterFilmsByDirector, getFilmStats };