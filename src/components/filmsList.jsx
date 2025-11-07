import React from 'react';

function FilmsList(props) {
    const [films, setFilms] = React.useState([]);

    React.useEffect(() => {
        fetch('https://studioghibliapi-d6fc8.web.app/films')
            .then(response => response.json())
            .then(data => {
                setFilms(data);
            })
            .catch(error => console.error('Error fetching films:', error));
    }, []);

  return <ul>
        {films.map(film => (
            <li key={film.id}>{film.title}</li>))}
    </ul>;
}

export default FilmsList;