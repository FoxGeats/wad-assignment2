# react-movie-assignment-1
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
+ First navigate to the movies folder

`cd movies`

+ Create a .env file in src and include the following.

`REACT_APP_TMDB_KEY=<YOUR_TMDB_API_KEY>`

`FAST_REFRESH=false`

## API endpoints.

+ Popular actors - /movies/people
+ Actor Details - /persons/:id 
+ Discover TV  - /TV/popular 
+ TV Detail Page - /TV/:id 
+ Register Page - /register 
+ Reset password - /reset 
+ Login Page - /login 
+ Top Rated Movies - /movies/topRated
## Routing.
+ /movies/topRated - displays a list of top rated movies. (public)
+ /movies/people - displays a list of popular actors. (public)
+ /persons/:id - Detailed view of an actor including a list of movies they have starred in. (public)
+ /register - A simple register page allowing a user to create an account or sign in with Google. (public)
+ /reset - A simple reset password page that a user can reset their password for their account by sending emails (does not work with google account sign in). (public)
+ /login - The login page that a user can log in with email or with Google. (public)
+ /TV/popular - displays a list of TVs. (public)  
+  /TV/:id - displays the details of TV. (public)  

## Independent learning.
I learnt the technology of aunthentication by firebase to implement login, regist and reset. Once logged in, information is saved to firestore and the users email is displayed in the navigation bar next time they log in.
+ firebase.js

## References.

+ [Firebase](https://firebase.google.com/docs/web/setup?authuser=0&hl=zh)
+ [Pagination](https://mui.com/material-ui/react-pagination/#basic-pagination)

