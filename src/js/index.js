// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { trendTab } from "./slider.js";
import { createSections } from "./gallery.js";
import {
  getAllSeries,
  getAllMoviesData,
  URL_MOVIE,
  URL_TV,
} from "../js/const.js";
const mainContainer = document.getElementById("main-content");
const movieArray = [...URL_MOVIE];
const serieArray = [...URL_TV];

window.addEventListener("load", async () => {
  const allMoviesData = await getAllMoviesData();
  const allSeriesData = await getAllSeries();

  trendTab(mainContainer, movieArray[0], allMoviesData[0]);
  createSections(mainContainer, movieArray, allMoviesData);
  trendTab(mainContainer, serieArray[0], allSeriesData[0]);
  createSections(mainContainer, serieArray, allSeriesData);
});

mainContainer.addEventListener("click", (e) => {
  if (e.target.id !== "main-content") {
    console.log(e.target.id);
  } else return;
});
