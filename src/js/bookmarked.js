const LS = localStorage;
let index;
let bookmarkedObj = [];

const bookmarked = (target) => {
  console.log(target.children[0].src);
  if (target.dataset.checked === "unchecked") {
    target.dataset.checked = "checked";
    bookmarkedObj.push({
      title: target.parentElement.children[1].textContent,
      bgImg: target.parentElement.style.backgroundImage,
      year: target.parentElement.children[0].children[0].textContent,
      id: target.parentElement.dataset.id,
      media: target.parentElement.dataset.mediaType,
    });
    target.children[0].src === "../assets/images/icon-bookmark-full.svg";
    LS.setItem("itemDataObj", JSON.stringify(bookmarkedObj));
  } else {
    target.parentElement.remove();
    bookmarkedObj.splice(index);
    target.dataset.checked = "unchecked";
    target.children[0].src = "../assets/images/icon-bookmark-empty.svg";
  }
};

const createSectionItem = (allDataObj, index) => {
  const sectionItem = document.createElement("div");
  const infoItem = document.createElement("div");
  const yearItem = document.createElement("div");
  const mediaItem = document.createElement("div");
  const titleItem = document.createElement("div");
  const bookmarkItem = document.createElement("div");
  const bookmarkImg = document.createElement("img");
  yearItem.textContent = allDataObj[index].year;
  titleItem.textContent = allDataObj[index].title;
  bookmarkImg.src = "../assets/images/icon-bookmark-full.svg";
  bookmarkImg.classList.add("bookmark--img");
  bookmarkItem.append(bookmarkImg);
  bookmarkItem.classList.add("bookmark");
  bookmarkItem.dataset.save = "bookmark";

  sectionItem.classList.add("section__item");
  sectionItem.dataset.mediaType = allDataObj[index].mediaType;
  sectionItem.dataset.id = allDataObj[index].id;
  mediaItem.textContent = allDataObj[index].mediaType;

  sectionItem.style.backgroundImage = allDataObj[index].bgImg;

  infoItem.append(yearItem, mediaItem);
  sectionItem.append(infoItem, titleItem, bookmarkItem);
  return sectionItem;
};

const createSection = (allDataObj, mainContainer) => {
  const fragment = document.createDocumentFragment();
  const sectionContainer = document.createElement("div");
  const sectionContent = document.createElement("div");

  sectionContainer.classList.add("section-container");

  for (let index = 0; index < bookmarkedObj.length; index++) {
    index = index;
    const sectionItem = createSectionItem(allDataObj, index);
    sectionContainer.append(sectionItem);
    sectionContent.append(sectionContainer);
    fragment.append(sectionContent);
  }

  mainContainer.append(fragment);
};

const printBookmarked = (mainContainer) => {
  mainContainer.innerHTML = "";

  createSection(bookmarkedObj, mainContainer);
};

export { bookmarked, printBookmarked };
