import { getAllBookmarked } from "./const";
import { createSections } from "./gallery";

const LS = localStorage;

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

const printBookmarked = (mainContainer) => {
  mainContainer.innerHTML = "";
  const storageData = JSON.parse(LS.getItem("itemDataObj"));
  let allBookmarkedData = [];
  storageData.forEach(async (element) => {
    allBookmarkedData.push(await getAllBookmarked(element.id, element.media));
  });
  console.log(allBookmarkedData);
};

export { bookmarked, printBookmarked };
