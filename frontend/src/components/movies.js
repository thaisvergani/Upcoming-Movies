import React, { Component } from 'react';
import './movies.css';
import InfiniteScroll from 'react-infinite-scroller';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieDetails from './details'
import SearchBar from './searchbar'

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      hasMoreItems: true,
      page: 1,
      items: []
    };
  };

  Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }

  loadItems(page) {

    fetch(`/api/movies?page=${encodeURIComponent(this.state.page)}`)
      .then(res => res.json())
      .then(movies => {
        this.setState({
          movies: movies,
          hasMoreItems: true,
          page: page + 1

        });
        console.log(movies[0], this.state.page)
      });
  }

  render() {

    const loader = <div className="loader">Loading ...</div>;

    this.state.movies.map((movie, i) => {

      this.state.items.push(

        <div className="movie" key={movie.id}>
          <Link to={`/m/${movie.id}`}>

            <img src={movie.poster_path} />
            <div className="movie-title">
              <p >{movie.title}</p>
            </div>

          </Link>
        </div>
      );

    });

    return (
      <Router>

        <div className="movies-wrapper">
          <div className="header">
          <SearchBar></SearchBar>
          <Route path="/m/:movieId" component={MovieDetails} />

          </div>

          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={loader}>

            <div className="tracks">
              {this.state.items}
            </div>
          </InfiniteScroll>

        </div>
      </Router>

    );
  }
}

export default Movies;
