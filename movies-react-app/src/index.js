import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PeoplePage from './pages/peoplePage'
import PersonDetailsPage from './pages/personDetailsPage'
import RegisterPage from "./pages/registerPage";


import TopRatedMoviesPage from "./pages/topRatedMoviesPage"
import LogoutPage from "./pages/logoutPage";
import Login from "./pages/Login";
import AuthProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <AuthProvider>
    <SiteHeader />
    <MoviesContextProvider>
    <Routes>
      
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route element={<ProtectedRoutes />}>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
      
      </Route>
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      <Route path="/movies/people" element={<PeoplePage />} />
      <Route path="/persons/:id" element={<PersonDetailsPage />} />
      
      <Route exact path="/register" element={<RegisterPage />} />
      
      <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
      <Route path="/pages/logout" element={<LogoutPage />} />
      
      <Route path="/pages/login" element={<Login />} />
      

      
    </Routes>
    </MoviesContextProvider>
    </AuthProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);