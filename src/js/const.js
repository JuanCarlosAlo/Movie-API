import { fetchData } from './utility';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ccaf46d5cdc18b726b1794515f8242f8';

const URL_MOVIE = [
  {
    link: API_URL + 'trending/movie/week?api_key=' + API_KEY,
    title: 'Trending'
  },
  {
    link: API_URL + 'movie/popular?api_key=' + API_KEY,
    title: 'Popular Movies'
  },
  {
    link: API_URL + 'movie/upcoming?api_key=' + API_KEY,
    title: 'Upcoming Movies'
  },
  {
    link: API_URL + 'movie/top_rated?api_key=' + API_KEY,
    title: 'Top rated Movies'
  }
];

const URL_TV = [
  {
    link: API_URL + 'trending/tv/week?api_key=' + API_KEY,
    title: 'Trending'
  },
  {
    link: API_URL + 'tv/popular?api_key=' + API_KEY,
    title: 'Popular Series'
  },
  {
    link: API_URL + '/tv/airing_today?api_key=' + API_KEY,
    title: 'On Air'
  }
];

const getAllMoviesData = async () => {
  const allPromises = await Promise.all(
    URL_MOVIE.map(obj => fetchData(obj.link))
  );
  return allPromises;
};
const getAllSeries = async () => {
  const allPromises = await Promise.all(URL_TV.map(obj => fetchData(obj.link)));
  return allPromises;
};

export { getAllSeries, getAllMoviesData, URL_MOVIE, URL_TV };
