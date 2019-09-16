# Upcoming Movies 📽🎞

Webapp for cinephiles and movie hobbyists.

## Features

- See a list of upcoming movies - including the movies' name, poster or backdrop image,
genre and release date. The list should not be limited to only the first 20 movies as
returned by the API.
- Select a specific movie to see its details (name, poster image, genre, overview and
release date).
- Search for movies by entering a partial or full movie name.


## Architecture

The Application was built using React in the client side (frontend) and using node.js + Express framework on the backend.

> #### Running the Express Server [Backend]
> npm start

> #### Running the React Server [Frontend]
> cd frontend
> npm start

The list of movies and details is retrieved from The Movie Database API.
No data storage strategy was used, yet, in a futute implementation, a cache system would be helpful, so the backend could get the genres and movie list from the database, instead of getting it from the The Movie Database API every time.

## List of third-party libraries used and short description of why/how they were used
### Axios 
Used to make the requisitions from the frontend (React) to the backend (express) and from the backend server to the The Movie Database API.

### Moment
Used to format dates on frontend

### react-infinite-scroller
This component was used to load the movies as the list is scrolled. 
This way, the list is not limited to the first 20 results

### react-router-dom
Used to route the components (open details and go back to main list)
