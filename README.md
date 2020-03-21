# 🎥 Upcoming Movies 🎥

Webapp for cinephiles and movie hobbyists.

Built using  and [React JS](https://github.com/facebook/react) and [Node JS](https://github.com/nodejs).

Hosted at [Heroku](https://upcoming-movies-thais.herokuapp.com/)

## Features

- See a list of upcoming movies - including the movies' name, backdrop image, genre and release date. 
- Infinite scroll to not limit the list.
- Select a specific movie to see its details (name, poster image, genre, overview and release date).
- Search for movies by entering a partial or full movie name.

## Architecture

The Application was built using React in the client side (frontend) and using node.js + Express framework on the backend.


## Assumptions
The list of movies and details is retrieved from The Movie Database API.
No data storage strategy was used, yet, in a future implementation, a cache system would be helpful, so the backend could get the genres and movie list from the database, instead of getting it from the The Movie Database API every time.

## Running the server
``` 
 npm start # Running the Express Server [Backend]
 cd frontend # entering the React Server directory [Frontend]
 npm start # Running the React Server [Frontend]
```
## Third-party libraries used

### Axios 
Used to make the requisitions from the frontend (React) to the backend (express) and from the backend server to the The Movie Database API.

### Moment
Used to format dates on frontend.

### React Infinite Scroller
This component was used to load the movies as the list is scrolled. 
This way, the list is not limited to the first 20 results

### React Router Dom
Used to route the components (open details and go back to main list)
