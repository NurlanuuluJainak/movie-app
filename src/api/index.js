import { API_KEY } from "../constants";
import { apiRequest } from "./axios";

export const BASE_URL = "https://api.themoviedb.org/3";

const trendingMovie = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const upcamingMovie = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const topRatedMovie = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const popularMovie = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const searchMovie = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

const movieDetail = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
const movieCredits = (id) =>
  `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
const similarMovie = (id) =>
  `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;

const personalDetail = (id) => `${BASE_URL}/person/${id}?api_key=${API_KEY}`;
const personMovies = (id) =>
  `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`;

export const fetchTrendingMovie = () => {
  return apiRequest(trendingMovie);
};


export const fetchUpcamingMovie = () => {
  return apiRequest(upcamingMovie);
};
export const fetchTopRatedMovie = () => {
  return apiRequest(topRatedMovie);
};
export const fetchPopularMovie = () => {
  return apiRequest(popularMovie);
};
export const fetchMovieDetail = (id) => {
  return apiRequest(movieDetail(id));
};
export const fetchMovieCredits = (id) => {
  return apiRequest(movieCredits(id));
};
export const fetchSimilarMovie = (id) => {
  return apiRequest(similarMovie(id));
};
export const fetchPersonalDetail = (id) => {
  return apiRequest(personalDetail(id));
};
export const fetchPersonMovies = (id) => {
  return apiRequest(personMovies(id));
};

export const fetchSearchMovie = (params) => {
return apiRequest(searchMovie,params)
}

export const image500 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w500" + posterPath : null;
};
export const image342 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w342" + posterPath : null;
};
export const image185 = (posterPath) => {
  return posterPath ? "https://image.tmdb.org/t/p/w185" + posterPath : null;
};
