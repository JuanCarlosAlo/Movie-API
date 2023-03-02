const numberOfSliderItems = 10;

const createSlider = async (mainContainer, array, allData) => {
  const sectionItem = document.createElement('div');
  const infoItem = document.createElement('div');
  const yearItem = document.createElement('div');
  const mediaItem = document.createElement('div');
  const titleItem = document.createElement('div');
  const bookmarkItem = document.createElement('div');
  const bookmarkImg = document.createElement('img');

  bookmarkImg.src = '../assets/images/icon-bookmark-empty.svg';
  bookmarkItem.append(bookmarkImg);
  bookmarkItem.classList.add('bookmark');
  bookmarkItem.dataset.save = 'bookmark';

  allData.results.forEach((item, index) => {
    item.style.backgroundImage = `url(https://image.tmdb.org/t/p/w710_and_h400_multi_faces${allData.results[index].backdrop_path})`;
    if (allData.results[index].name) {
      item.children[1].textContent = url.results[index].name;
    } else {
      item.children[1].textContent = url.results[index].title;
    }
    if (allData.results[index].first_air_date) {
      item.children[0].children[0].textContent = allData.results[
        index
      ].first_air_date.slice(0, 4);
    } else {
      item.children[0].children[0].textContent = allData.results[
        index
      ].release_date.slice(0, 4);
    }
    item.children[0].children[1].textContent =
      allData.results[index].media_type;
  });
};

const trendTab = (mainContainer, array, allData) => {
  createSlider(mainContainer, array, allData);
};

export { trendTab };
