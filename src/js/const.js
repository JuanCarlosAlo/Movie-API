import { fetchData } from "../js/utility.js";

const WEEK_TRENDING = await fetchData(
  "https://api.themoviedb.org/3/trending/all/week?api_key=ccaf46d5cdc18b726b1794515f8242f8"
);

export { WEEK_TRENDING };
