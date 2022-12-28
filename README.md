# react-movie-assignment-2
Name: Shu Chen

## Overview.

A web app that displays many lists of different movies, TVs and actors/actress. A user can add movies to their favourites list.
The movie app allows a user to enter a detailed view of the movie they want to know more about and read about their favourite movies.
Users can also look at detailed views of their favourite actors or TVS too!
Users can log in with their email address and password authenticated by firebase.

### Features.
+ Firebase Authentication(login, register, reset)
+ TopRatedMoviesPage
+ Pagination
+ Popular Actor Page
+ Actor Detail Page
+ Discover TV Page
+ TV Detail Page

## Setup requirements.


+ Create a .env file in movies/api/ and include the following.

`NODE_ENV=development`
`PORT=8080`
`HOST=localhost`
`MONGO_DB=YourMongoURL`
`SEED_DB=True`
`SECRET=YourJWTSecret`
`REACT_APP_TMDB_KEY=YourTMDBApiKey`

## API endpoints.


### Actors
+ /api/actors/popular | GET | Gets popular actors from movies-api
+ /api/actors/:id | GET | Gets detailed information of an actor from movies-api
+ /api/actors/:id/images | GET | Gets actor images from movies-api
### Genres
+ /api/genres/ | GET | Gets all genres from tmdb
### Movies
+ /api/movies/home/:page | GET | Gets discover movie from tmdb based on page number
+ /api/movies/:id | GET | Gets a single movie from tmdb
+ /api/movies/tmdb/upcoming/:page | GET | Get upcoming movies from tmdb based on page number
+ /api/movies/tmdb/topRated/:page | GET | Get top rated movies from tmdb based on page number
+ /api/movies/tmdb/movie/:id/images | GET | Get movie images from tmdb

### Users
+ /api/users/ | GET | Gets all users information from MongoDB
+ /api/users/ | POST | Registers/authenticates a user
+ /api/users/:id | Put | Updates information about a user
+ /api/users/:userName/favourites | GET | Gets users favourites
+ /api/users/:userName/favourites | POST | Add a favourite movieId to user's favourites
+ /api/users/:username/movie/:id/favourites | POST | Deletes a movieId from a user's favourites
### Reviews
+ /api/reviews/movie/:id/reviews | GET | Gets a movie reviews
+ /api/reviews/movie/:id/reviews/:username | POST | posts or updates a review


## Authentication and protected routes.
+ /movies/favorites
+ /reviews/form

## Integrating with React App
+ All the data in react app comes from the movies-api.
+ All favourite movie IDs are stored in MongoDB through this API. When they log out, the web page will not show the favoriates.
+ All reviews are stored in MongoDB. Users can see their own reviews and reviews from TMDB.
