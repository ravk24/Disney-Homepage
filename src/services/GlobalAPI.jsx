import axios from "axios";

//https://api.themoviedb.org/3/trending/all/day?api_key=87ac4ebc4205b3f3927f59e6ba0c32ff
const movieURL = "https://api.themoviedb.org/3";
const apiKey = "87ac4ebc4205b3f3927f59e6ba0c32ff";

export const getTrendingVideos = axios.get(
  `${movieURL}/trending/all/day?api_key=${apiKey}`
);

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=87ac4ebc4205b3f3927f59e6ba0c32ff";
export const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
