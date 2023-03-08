import { getAllBookmarked } from "./const";

const LS = localStorage;
let numberOfSectionItems;
let bookmarkedObj = [];

const bookmarked = (target) => {
  bookmarkedObj.push({
    id: target.parentElement.dataset.id,
    media: target.parentElement.dataset.mediaType,
  });
  LS.setItem("itemDataObj", JSON.stringify(bookmarkedObj));

  if (target.children[0].src === "../assets/images/icon-bookmark-full.svg") {
    target.children[0].src = "../assets/images/icon-bookmark-empty.svg";
  } else {
    target.children[0].src = "../assets/images/icon-bookmark-full.svg";
  }
};

const createSectionItem = (url, index, mediaType) => {
  const sectionItem = document.createElement("div");
  const infoItem = document.createElement("div");
  const yearItem = document.createElement("div");
  const mediaItem = document.createElement("div");
  const titleItem = document.createElement("div");
  const bookmarkItem = document.createElement("div");
  const bookmarkImg = document.createElement("img");

  bookmarkImg.src = "../assets/images/icon-bookmark-empty.svg";
  bookmarkImg.classList.add("bookmark--img");
  bookmarkItem.append(bookmarkImg);
  bookmarkItem.classList.add("bookmark");
  bookmarkItem.dataset.save = "bookmark";

  sectionItem.classList.add("section__item");
  sectionItem.dataset.mediaType = mediaType;
  sectionItem.dataset.id = url[index].id;
  mediaItem.textContent = mediaType;

  sectionItem.style.backgroundImage = `url(https://image.tmdb.org/t/p/w710_and_h400_multi_faces${url[index].backdrop_path})`;

  if (url[index].name) {
    titleItem.textContent = url[index].name;
  } else {
    titleItem.textContent = url[index].title;
  }
  if (url[index].first_air_date) {
    yearItem.textContent = url[index].first_air_date.slice(0, 4);
  } else {
    yearItem.textContent = url[index].release_date.slice(0, 4);
  }
  if (index === 4) {
    sectionItem.classList.add("section__item--bottom-left");
  } else if (index === 5) {
    sectionItem.classList.add("section__item--bottom-right");
  }

  infoItem.append(yearItem, mediaItem);
  sectionItem.append(infoItem, titleItem, bookmarkItem);
  return sectionItem;
};

const createSection = (allData, mainContainer, mediaType) => {
  const fragment = document.createDocumentFragment();
  const sectionContainer = document.createElement("div");
  const sectionContent = document.createElement("div");
  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("section__title");
  console.log(sectionContainer);
  sectionContainer.classList.add("section-container");
  console.log(allData);
  for (let index = 0; index < allData.length; index++) {
    const sectionItem = createSectionItem(allData, index, mediaType);
    sectionContainer.append(sectionItem);
    sectionContent.append(sectionTitle, sectionContainer);
    fragment.append(sectionContent);
  }

  mainContainer.append(fragment);
};

const printBookmarked = (mainContainer) => {
  mainContainer.innerHTML = "";
  const storageData = JSON.parse(LS.getItem("itemDataObj"));
  let allBookmarkedData;
  storageData.forEach(async (element) => {
    allBookmarkedData = await getAllBookmarked(element.id, element.media);
  });

  console.log(allBookmarkedData);
  createSection(allBookmarkedData, mainContainer, "tv");
};

export { bookmarked, printBookmarked };
