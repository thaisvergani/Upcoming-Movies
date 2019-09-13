import React, { Component } from 'react';
import './movies.css';
import InfiniteScroll from 'react-infinite-scroller';

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

  
  loadItems(page) {
    let url = '/api/movies';
    
    let options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        page: this.state.page
      },
      
    };

    fetch(`/api/movies?page=${encodeURIComponent( this.state.page)}`)
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
          <img  src={movie.poster_path}/>
          <div className="movie-title">
           <p >{movie.title}</p>
            </div>
        </div>

      );

    });

    return (
      <div className="movies-wrapper">
        <h2>Movies</h2>
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
    );
  }
}

export default Movies;
