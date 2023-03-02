import { URLS, API_URL, API_KEY } from "../js/const.js";
import { fetchData } from "../js/utility.js";

const numberOfSectionItems = ["item", "item", "item", "item", "item", "item"];
const mainContainer = document.getElementById("main-content");
const urlArray = [...URLS];

const createSectionItem = (url, index) => {
  const sectionItem = document.createElement("div");
  const infoItem = document.createElement("div");
  const yearItem = document.createElement("div");
  const mediaItem = document.createElement("div");
  const titleItem = document.createElement("div");

  sectionItem.style.backgroundImage = `url(https://image.tmdb.org/t/p/w710_and_h400_multi_faces${url.results[index].backdrop_path})`;

  if (url.results[index].name) {
    titleItem.textContent = url.results[index].name;
  } else {
    titleItem.textContent = url.results[index].title;
  }
  if (url.results[index].first_air_date) {
    yearItem.textContent = url.results[index].first_air_date.slice(0, 4);
  } else {
    yearItem.textContent = url.results[index].release_date.slice(0, 4);
  }
  if (index === 4) {
    sectionItem.classList.add("section__item--bottom-left");
  } else if (index === 5) {
    sectionItem.classList.add("section__item--bottom-right");
  } else {
    sectionItem.classList.add("section__item");
  }
  sectionItem.id = url.results[index].id;
  mediaItem.textContent = url.results[index].media_type;
  infoItem.append(yearItem, mediaItem);
  sectionItem.append(infoItem, titleItem);
  return sectionItem;
};

const createSection = (allUrls, url) => {
  const fragment = document.createDocumentFragment();
  const sectionContainer = document.createElement("div");
  const sectionContent = document.createElement("div");
  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("section__title");
  console.log(allUrls);
  sectionTitle.textContent = url.title;
  sectionContainer.classList.add("section-container");

  numberOfSectionItems.forEach((item, index) => {
    const sectionItem = createSectionItem(allUrls, index);
    sectionContainer.append(sectionItem);
    sectionContent.append(sectionTitle, sectionContainer);
    fragment.append(sectionContent);
  });
  mainContainer.append(fragment);
};
const createSections = () => {
  urlArray.shift();
  urlArray.forEach(async (url) => {
    console.log(url.link);
    const allUrls = await fetchData(url.link);

    createSection(allUrls, url);
  });
};

const popularMovie = () => {
  createSections();
};

export { popularMovie };
