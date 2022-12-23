import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToFavorites = (e) => {
    if (!userContext.isAuthenticated) {
      alert("please log in");
      return navigate("/");
    }else{
    e.preventDefault();
    context.addToFavorites(userContext.userEmail, movie.id);
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;