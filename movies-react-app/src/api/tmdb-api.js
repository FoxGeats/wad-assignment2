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
   
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  // ).then((response) => {
  //   if (!response.ok) {
  //     throw new Error(response.json().message);
  //   }
  //   return response.json();
  // })
  // .catch((error) => {
  //    throw error
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
    
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
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

  
  export const getTVs = (args) => {
    const [, pageNum] = args.queryKey;
    const { page } = pageNum;
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
    

  export const getTVImage = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `
      https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });

  };

  export const getTV = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
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