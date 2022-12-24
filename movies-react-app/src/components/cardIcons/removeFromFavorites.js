import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { deleteFavourite } from "../../api/tmdb-api";
import { AuthContext } from "../../contexts/authContext";

const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const userContext = useContext(AuthContext)
  const email = userContext.userEmail
  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    context.removeFavourite(email, movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;