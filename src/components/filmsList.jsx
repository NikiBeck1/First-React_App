import React from 'react';
import { filterFilmsByDirector, getListOf } from '../helpers/filmHelpers';

function FilmsList() {
  const [films, setFilms] = React.useState([]);
  const [searchDirector, setSearchDirector] = React.useState('');

  React.useEffect(() => {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((res) => res.json())
      .then((data) => setFilms(data))
      .catch((err) => console.log(err));
  }, []);


  const directors = getListOf(films, "director");

  const filteredFilms = searchDirector
    ? filterFilmsByDirector(films, searchDirector)
    : films;

  return (
    <>
      <h2>Films List</h2>
      <select
        className='filterSelect'
        value={searchDirector}
        onChange={(e) => setSearchDirector(e.target.value)}
      >
        <option value="">All</option>

        {directors.map((director) => (
          <option key={director} value={director}>
            {director}
          </option>
        ))}
      </select>

      <ul>
        {filteredFilms.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </>
  );
}

export default FilmsList;
