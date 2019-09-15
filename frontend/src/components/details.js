import React from 'react'
import { Link } from "react-router-dom";

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.match.movieId,
            name: null,
            imageUrl: null,
            genre: null,
            overview: null,
            releaseDate: null,
        };
    };

    componentDidUpdate(previousProps, previousState) {
        if (this.state.movieId !== this.props.match.params.movieId) {

            fetch('/api/movies/details/' + this.props.match.params.movieId)
                .then(res => res.json())
                .then(details => {
                    this.setState({
                        movieId: this.props.match.params.movieId,
                        name: details.title,
                        imageUrl: details.title,
                        genre: details.genres,
                        overview: details.overview,
                        releaseDate: details.release_date
                    });
                });
        }

    }

    render() {

        const { params } = this.props.match

        return <div key={params.movieId}>
            <Link to="/">x</Link>

            <p>{params.movieId}</p>
            <p>{this.state.name}</p>
            <p>{this.state.overview}</p>
            <p>{this.state.releaseDate}</p>

        </div>
    }
}
export default MovieDetails