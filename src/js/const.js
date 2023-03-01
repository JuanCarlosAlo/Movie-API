const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ccaf46d5cdc18b726b1794515f8242f8';

const URLS = {
  trendingWeekAll: API_URL + 'trending/all/week?api_key=' + API_KEY,
  moviePopular: API_URL + 'movie/popular?api_key=' + API_KEY,
  movieUpcioming: API_URL + 'movie/upcoming?api_key=' + API_KEY,
  movieTopRated:
    API_URL + 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY,
  seriesPopular: API_URL + 'tv/popular?api_key=' + API_KEY
};

export { URLS, API_URL, API_KEY };
