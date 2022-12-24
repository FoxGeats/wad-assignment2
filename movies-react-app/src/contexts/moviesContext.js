import React, { useState, useEffect, useContext  } from "react";
import { AuthContext } from "./authContext";
import { getFavourites, addFavourite, deleteFavourite } from "../api/tmdb-api";
export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatch, setMustWatch] = useState( [] ) 

  const userContext = useContext(AuthContext)
  const email = userContext.userEmail
  const [favourites, setFavourites] = useState([]);


  if(userContext.isAuthenticated){
      getFavourites(email).then((favourites) => {
      setFavourites(favourites);
    });
  }


  const addToFavorites = (username, movie) => {
    let newFavourites = [];
    addFavourite(username, movie);
    newFavourites = getFavourites(username, movie)
    setFavorites(newFavourites)
  };


  const removeFavourite = (username, movie) => {
    let newFavourites = [];
    deleteFavourite(username, movie);
    newFavourites = getFavourites(username, movie)
    setFavorites(newFavourites)
  };

  const clearFavourites = () => {
    setFavorites([])
  }


  const addToPlayList = (movie) => {
    let newPlayList = [];
    if (!mustWatch.includes(movie.id)){
      newPlayList = [...mustWatch, movie.id];
      
    }
    else{
      newPlayList = [...mustWatch];
    }
    setMustWatch(newPlayList)
  };
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        favourites,
        addToFavorites,
        removeFavourite,
        addReview,
        clearFavourites,
        addToPlayList
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;