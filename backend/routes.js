const express = require('express');

const MovieController = require('./controllers/MovieController');

const routes = express.Router();

routes.get('/api/movies', MovieController.list_movies);
routes.get('/api/movies/details/:id', MovieController.movie_details);

module.exports = routes;