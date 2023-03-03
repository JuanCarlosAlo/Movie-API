const numberOfSectionItems = 6;

const createSectionItem = (url, index) => {
  const sectionItem = document.createElement("div");
  const infoItem = document.createElement("div");
  const yearItem = document.createElement("div");
  const mediaItem = document.createElement("div");
  const titleItem = document.createElement("div");
  const bookmarkItem = document.createElement("div");
  const bookmarkImg = document.createElement("img");

  bookmarkImg.src = "../assets/images/icon-bookmark-empty.svg";
  bookmarkItem.append(bookmarkImg);
  bookmarkItem.classList.add("bookmark");
  bookmarkItem.dataset.save = "bookmark";

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
  } else {
    sectionItem.classList.add("section__item");
  }
  sectionItem.id = url[index].id;
  mediaItem.textContent = url[index].media_type;
  infoItem.append(yearItem, mediaItem);
  sectionItem.append(infoItem, titleItem, bookmarkItem);
  return sectionItem;
};

const createSection = (arrayObj, allData, mainContainer) => {
  const fragment = document.createDocumentFragment();
  const sectionContainer = document.createElement("div");
  const sectionContent = document.createElement("div");
  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("section__title");

  sectionTitle.textContent = arrayObj.title;
  sectionContainer.classList.add("section-container");

  for (let index = 0; index < numberOfSectionItems; index++) {
    const sectionItem = createSectionItem(allData, index);
    sectionContainer.append(sectionItem);
    sectionContent.append(sectionTitle, sectionContainer);
    fragment.append(sectionContent);
  }

  mainContainer.append(fragment);
};
const createSections = (mainContainer, arrayObj, allData) => {
  arrayObj.shift();

  arrayObj.forEach((obj, index) => {
    createSection(arrayObj[index], allData[index].results, mainContainer);
  });
};

export { createSections };
