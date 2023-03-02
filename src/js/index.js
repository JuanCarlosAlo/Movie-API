// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { trendTab } from './slider.js';
import { createSections } from './gallery.js';
import {
  getAllSeries,
  getAllMoviesData,
  URL_MOVIE,
  URL_TV
} from '../js/const.js';
const mainContainer = document.getElementById('main-content');
const movieArray = [...URL_MOVIE];
const serieArray = [...URL_TV];

window.addEventListener('load', async () => {
  const allMoviesData = await getAllMoviesData();
  const allSeriesData = await getAllSeries();
  console.log(allMoviesData[0]);
  trendTab(mainContainer, movieArray, allMoviesData[0]);
  createSections(mainContainer, movieArray, allSeriesData);
  trendTab(mainContainer, serieArray);
  createSections(mainContainer, serieArray);
});
