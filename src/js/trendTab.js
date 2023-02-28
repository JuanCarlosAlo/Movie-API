import { WEEK_TRENDING } from "../js/const.js";

const trending = document.getElementById("trending");
const rootStyles = document.documentElement.style;
const allTrendingItems = [...trending.children];

const trendTab = () => {
  console.log(WEEK_TRENDING, allTrendingItems);
  allTrendingItems.forEach((item, index) => {
    item.style.backgroundImage = `url(https://image.tmdb.org/t/p/w710_and_h400_multi_faces${WEEK_TRENDING.results[index].backdrop_path})`;
    if (WEEK_TRENDING.results[index].name === undefined) {
      item.children[3].textContent = WEEK_TRENDING.results[index].title;
    } else {
      item.children[3].textContent = WEEK_TRENDING.results[index].name;
    }
    if (WEEK_TRENDING.results[index].first_air_date === undefined) {
      item.children[0].textContent = WEEK_TRENDING.results[
        index
      ].release_date.slice(0, 4);
    } else {
      item.children[0].textContent = WEEK_TRENDING.results[
        index
      ].first_air_date.slice(0, 4);
      console.log(WEEK_TRENDING.results[index].first_air_date.slice(0, 4));
    }
    item.children[1].textContent = WEEK_TRENDING.results[index].media_type;

    if (
      (item.children[1].textContent =
        WEEK_TRENDING.results[index].adult === true)
    ) {
      item.children[2].textContent = "PG";
    } else {
      item.children[2].textContent = "+18";
    }
  });
};

export { trendTab };
