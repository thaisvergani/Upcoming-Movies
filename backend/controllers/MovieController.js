const axios = require('axios');
const token = "1f54bd990f1cdfb230adb312546d765d";

module.exports = {

    
    async list_movies(req, res) {

        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/upcoming',
            {
                params: {
                    page: req.query.page,
                    language: 'en-US',
                    api_key: token
                },
            }
        )
        response.data.results.forEach((item) => {
            item.poster_path = `http://image.tmdb.org/t/p/w92/`.concat(item.poster_path);
        })
        return res.json(response.data.results);
    },

    async movie_details(req, res) {
        console.log('sa');

     
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/`.concat(req.params.id),
            {
                params: {
                    language: 'en-US',
                    api_key: token
                },
            }
        )
        return res.json(response.data);
    }
};
