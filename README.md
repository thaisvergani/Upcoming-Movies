## Running the Express Server [Backend]

npm start

## Running the React Server [Frontend]

cd frontend

npm start

## Architecture (how did I approach the problem)

## Assumptions that I have made
To a future development, could be implemented some cash system to store the data as the genres list and make requisitions faster.

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
