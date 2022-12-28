export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const addFavourite = (username, movie) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ movie })
  }).then(res => res.json())
};

export const getFavourites = async (username) => {
  return fetch(`/api/users/${username}/favourites`, {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'get'}).then(res => res.json())
};


export const deleteFavourite = (username, movie) => {
  return fetch(`/api/users/${username}/movie/${movie.id}/favourites`, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ movie })
  }).then(res => res.json())
};


 export const getMovies = (args) => {
  const [, pageNum] = args.queryKey;
  const { page } = pageNum;
  return fetch(
    `/api/movies/home/${page}`,
    ).then(res => {
       return res.json();
    }).catch((error) => {
       console.log(error);
   
  });
 };
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}`
  ).then(res => {
    return res.json();
  }).catch((error) => {
    console.log(error);
  });
};
  

  export const getGenres =async () => {
    return fetch(
      '/api/genres',
      ).then(res => {
          return res.json();
      }).catch((error) => {
          console.log(error);
      });
    };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `/api/movies/tmdb/movie/${id}/images`
      ).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };
    
  export const getMovieReviews = async (id) => {
    return fetch(
      `/api/reviews/movie/${id}/reviews`
      ).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
        };
    export const addReview = async (username, movie, review) => {
      return fetch(`/api/reviews/movie/${movie.id}/reviews/${username}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ author: review.author, movieId: movie.id, content: review.content, rating: review.rating })
      }).then(res => res.json())
    };


  export const getMovieUpcoming = (args) => {
    const [, pageNum] = args.queryKey;
  const { page } = pageNum;
    return fetch(
      `/api/movies/tmdb/upcoming/${page}`,
      ).then(res => {
         return res.json();
      }).catch((error) => {
         console.log(error);
      });
    };

//actor
  export const getPeople = (args) => {
    const [, pageNum] = args.queryKey;
    const { page } = pageNum;
    return fetch(
      `/api/actors/popular/${page}`
      ).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });
    };

  export const getPerson = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `/api/actors/${id}`
  ).then(res => {
    return res.json();
  }).catch((error) => {
    console.log(error);
  });
};

  export const getPeopleImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `/api/actors/${id}/images`
      ).then(res => {
        return res.json();
      }).catch((error) => {
        console.log(error);
      });

  };

  
  

  export const getTopRatedMovies = (args) => {
    const [, pageNum] = args.queryKey;
    const { page } = pageNum;
    return fetch(
      `/api/movies/tmdb/topRated/${page}`,
  ).then(res => {
     return res.json();
  }).catch((error) => {
     console.log(error);
  });
};