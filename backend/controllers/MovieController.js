const axios = require('axios');
const token = "1f54bd990f1cdfb230adb312546d765d";

module.exports = {
   
    async list_movies(req, res){
    
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/upcoming',
            {
               params: { page: '1',
                language: 'en-US',
                api_key: token },
            }
        )
        console.log(response.data.results);
                    
        return res.json(response.data.results);
    }
};
