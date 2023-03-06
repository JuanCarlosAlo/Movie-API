// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { trendTab } from "./slider.js";
import { createSections } from "./gallery.js";
import {
  getAllSeries,
  getAllMoviesData,
  URL_MOVIE,
  URL_TV,
  getAllDetails,
  getAllCredits,
} from "../js/const.js";
import { modalOpen } from "../js/modal.js";
import { bookmarked } from "./bookmarked";

const mainContainer = document.getElementById("main-content");

const movieArray = [...URL_MOVIE];
const serieArray = [...URL_TV];

window.addEventListener("load", async () => {
  const allMoviesData = await getAllMoviesData();
  const allSeriesData = await getAllSeries();
  console.log(allMoviesData);

  trendTab(mainContainer, movieArray[0], allMoviesData[0], "movie");
  createSections(mainContainer, movieArray, allMoviesData, "movie");
  trendTab(mainContainer, serieArray[0], allSeriesData[0], "tv");
  createSections(mainContainer, serieArray, allSeriesData, "tv");
});

mainContainer.addEventListener("click", async (e) => {
  if (
    !e.target.classList.contains("section__item") &&
    !e.target.classList.contains("trending__item") &&
    !e.target.classList.contains("bookmark")
  )
    return;
  else if (e.target.dataset.save === "bookmark") {
    bookmarked(e.target);
  } else {
    const allCreditsData = await getAllCredits(
      e.target.dataset.id,
      e.target.dataset.mediaType
    );
    const allDetailsData = await getAllDetails(
      e.target.dataset.id,
      e.target.dataset.mediaType
    );
    modalOpen(allDetailsData, allCreditsData);
  }
});
