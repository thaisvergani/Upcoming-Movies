const express = require('express');

const MovieController = require('./controllers/MovieController');
const MovieDetailsController = require('./controllers/MovieDetailsController');

const routes = express.Router();

routes.get('/api/movies', MovieController.list_movies);
routes.get('/api/movies/details/:id', MovieDetailsController.movie_details);

module.exports = routes;