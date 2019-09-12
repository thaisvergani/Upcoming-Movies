import React, { Component } from 'react';
import './movies.css';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  };

  componentDidMount() {
    fetch('/api/movies')
      .then(res => res.json())
      .then(movies => this.setState({movies}, () => console.log('movies fetched...', movies)));
  }

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <ul>
        {this.state.movies.map(movie => 
          <li key={movie.id}>{movie.title} {movie.genre}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Movies;
