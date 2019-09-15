import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieDetails from './details'
import axios from 'axios';

class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      hasMoreItems: true,
      page: 1,
      items: [],
      query: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    this.setState({
      movies: [],
      items: [],
      hasMoreItems: true,
      page: 1
    })
    event.preventDefault();
  }

  loadItems() {
    axios.get(
      "/api/movies",
      {
        params: {
          page: this.state.page,
          q: this.state.query
        }
      })
      .then(response => {

        var hasMoreItems = true;
        if (response.data.length == 0){
          hasMoreItems = false
        }
        this.setState({
          movies: response.data,
          hasMoreItems: hasMoreItems,
          page: this.state.page + 1
        })

        this.state.movies.map((movie, i) => {

          this.state.items.push(
            <div className="movie" key={movie.id.toString()} keyprop={movie.id.toString()}>
              <Link to={`/m/${movie.id}`}>
                <img src={movie.poster_path} alt={movie.title} />
                <div className="movie-title">
                  <p >{movie.title}</p>
                </div>
              </Link>
            </div>
          )
        }
        )

      })
  }

  render() {

    const loader = <div className="loader" key={0}>Loading ...</div>;

    return (
      <Router>

        <div className="movies-wrapper">

          <div className="header">
            <form onSubmit={this.handleSubmit} >
              <input
                onChange={this.handleChange}
                type="text"
                className="input"
                placeholder="search" />
            </form >
            <Route path="/m/:movieId" component={MovieDetails} />
          </div>

          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.state.hasMoreItems}
            loader={loader}>
            <div className="movies">
              {this.state.items}
            </div>
          </InfiniteScroll>

        </div>
      </Router >

    );
  }
}

export default Movies;
