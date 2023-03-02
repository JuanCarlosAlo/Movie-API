const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "ccaf46d5cdc18b726b1794515f8242f8";

const URLS = [
  {
    link: API_URL + "trending/all/week?api_key=" + API_KEY,
    title: "Trending",
  },
  {
    link: API_URL + "movie/popular?api_key=" + API_KEY,
    title: "Popular Movies",
  },
  {
    link: API_URL + "movie/upcoming?api_key=" + API_KEY,
    title: "Upcoming Movies",
  },
  {
    link: API_URL + "movie/top_rated?api_key=" + API_KEY,
    title: "Top rated Movies",
  },
  {
    link: API_URL + "tv/popular?api_key=" + API_KEY,
    title: "Popular Series",
  },
];

export { URLS, API_URL, API_KEY };
