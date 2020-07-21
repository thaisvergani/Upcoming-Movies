import React from 'react'
import { Link } from "react-router-dom";
import moment from "moment";
import noimage from '../static/noimage.jpg';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: this.props.match.movieId,
            name: null,
            imageUrl: null,
            genres: null,
            overview: null,
            releaseDate: null,
            loaded: false
        };

        this.addDefaultSrc = this.addDefaultSrc.bind(this);
        this.getMovieDetails = this.getMovieDetails.bind(this);
    };

    addDefaultSrc(event) {
        event.target.src = noimage
    }

    getMovieDetails() {
        console.log('render');

        fetch('/api/movies/details/' + this.props.match.params.movieId)
            .then(res => res.json())
            .then(details => {
                this.setState({
                    movieId: this.props.match.params.movieId,
                    name: details.title,
                    imageUrl: details.poster_path,
                    genres: details.genres,
                    overview: details.overview,
                    releaseDate: details.release_date,
                    loaded: true
                });
            });
    }

    componentDidMount() {
        this.getMovieDetails();

    }

    componentDidUpdate(previousProps, previousState) {
        console.log(this.state.movieId, this.props.match.params.movieId);

        if (this.state.movieId !== this.props.match.params.movieId) {
            this.getMovieDetails();
        }
    }

    render() {

        const { params } = this.props.match
        return (
            <div key={params.movieId}>
                {(this.state.movieId == this.props.match.params.movieId) ?
                    <div className='movie-details-box'>
                        <div className='movie-details-img'>
                            <img
                                src={this.state.imageUrl}
                                alt={this.state.title}
                                onError={this.addDefaultSrc} />
                        </div>
                        <div className='movie-overview'>
                            <div className='close-details'><Link to="/">x</Link></div>
                            <p>{this.state.name}</p>
                            <div className="genres">
                                {this.state.genres.map((genre, i) => {
                                    return <p key={"details_" + genre.id}>{genre.name}</p>
                                })}
                            </div>
                            <p> {this.state.overview}</p>
                            <p>
                                Release date: {moment(this.state.releaseDate).format("MMMM DD, YYYY")}
                            </p>
                        </div>
                    </div>
                    : (
                        <div className='movie-details-box'>
                            <div className='loader-details'>  Loading...</div>
                        </div>
                    )
                }
            </div>)
    }
}
export default MovieDetails
