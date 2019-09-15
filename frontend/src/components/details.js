import React from 'react'
import { Link } from "react-router-dom";
import moment from "moment";
import noimage from './static/noimage.jpg';

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
    };
    addDefaultSrc(ev) {
        ev.target.src = noimage
    }
    componentDidUpdate(previousProps, previousState) {
        if (this.state.movieId !== this.props.match.params.movieId) {

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
    }

    render() {

        const { params } = this.props.match

        return (
            <div key={params.movieId}>


                {this.state.loaded ?
                    <div className='movie-details-box'>

                        <img className='movie-details-img'
                            src={this.state.imageUrl}
                            alt={this.state.title}
                            onError={this.addDefaultSrc} />
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

                    :
                    <div></div>

                }
            </div>)
    }
}
export default MovieDetails