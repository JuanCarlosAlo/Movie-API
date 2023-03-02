import { URLS, API_URL, API_KEY } from "../js/const.js";
import { fetchData } from "../js/utility.js";
const trending = document.getElementById("trending");
const rootStyles = document.documentElement.style;
const allTrendingItems = [...trending.children];

const trendTab = async () => {
  const weekTrending = await fetchData(URLS[0].link);
  allTrendingItems.forEach((item, index) => {
    item.style.backgroundImage = `url(https://image.tmdb.org/t/p/w710_and_h400_multi_faces${weekTrending.results[index].backdrop_path})`;
    if (weekTrending.results[index].name) {
      item.children[1].textContent = weekTrending.results[index].name;
    } else {
      item.children[1].textContent = weekTrending.results[index].title;
    }
    if (weekTrending.results[index].first_air_date) {
      item.children[0].children[0].textContent = weekTrending.results[
        index
      ].first_air_date.slice(0, 4);
    } else {
      item.children[0].children[0].textContent = weekTrending.results[
        index
      ].release_date.slice(0, 4);
    }
    item.children[0].children[1].textContent =
      weekTrending.results[index].media_type;

    // if (
    //   (item.children[1].textContent =
    //     WEEK_TRENDING.results[index].adult === true)
    // ) {
    //   item.children[2].textContent = "PG";
    // } else {
    //   item.children[2].textContent = "+18";
    // }
  });
};

export { trendTab };
