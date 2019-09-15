const axios = require('axios');
const token = "1f54bd990f1cdfb230adb312546d765d";

module.exports = {


    async list_movies(req, res) {
        console.log(req.query)
        var response;
        if (req.query.q){
            response = await axios.get(
                'https://api.themoviedb.org/3/search/movie',
                {
                    params: {
                        language: 'en-US',
                        api_key: token, 
                        page: req.query.page,
                        query: req.query.q
                    },
                }
            )
        }else{
            response = await axios.get(
                'https://api.themoviedb.org/3/movie/upcoming',
                {
                    params: {
                        page: req.query.page,
                        language: 'en-US',
                        api_key: token
                    },
                }
            )
        }

        response.data.results.forEach((item) => {
            if (item.poster_path != null){
                item.poster_path = 'http://image.tmdb.org/t/p/w92/'.concat(item.poster_path);
            }else{
                item.poster_path = 'static/no-image-available-icon.jpg';
            }
        })
        return res.json(response.data.results);
    },

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
        return res.json(response.data);
    },
  
};
