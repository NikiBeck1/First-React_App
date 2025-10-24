import React from 'react';

class FilmsList extends React.Component {
    constructor(props) {
    super(props);
     this.state = {
      films: []
    }
}

    getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
        .then(response => response.json())
        .then(data => {
            this.setState({ films: data })
        })
        .catch(error => console.error('Error fetching films:', error));
  }

  componentDidMount() {
    this.getFilms();
  }

    render() {
    return <ul>
        {this.state.films.map(film => (
            <li key={film.id}>{film.title}</li>))}
    </ul>;
  }
}

export default FilmsList;