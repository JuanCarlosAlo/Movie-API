const LS = localStorage;

const bookmarked = (target) => {
  target.parentElement.dataset.id = LS.getItem("itemDataId");
  console.log(target.parentElement.dataset);
  if (target.children[0].src === "../assets/images/icon-bookmark-full.svg") {
    target.children[0].src = "../assets/images/icon-bookmark-empty.svg";
  } else {
    target.children[0].src = "../assets/images/icon-bookmark-full.svg";
  }
};

export { bookmarked };
