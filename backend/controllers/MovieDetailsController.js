const axios = require('axios');
const token = "1f54bd990f1cdfb230adb312546d765d";

module.exports = {

    async movie_details(req, res) {

        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/'.concat(req.params.id),
            {
                params: {
                    language: 'en-US',
                    api_key: token
                },
            }
        )

        var movie = response.data;
        if (movie.poster_path != null) {
            movie.poster_path = 'http://image.tmdb.org/t/p/w154/'.concat(movie.poster_path);
        }
        if (movie.backdrop_path != null) {
            movie.backdrop_path = 'http://image.tmdb.org/t/p/w780/'.concat(movie.backdrop_path);
        }


        return res.json(movie);
    },

};
