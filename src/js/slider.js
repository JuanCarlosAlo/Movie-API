import { info } from 'autoprefixer';

const numberOfSliderItems = 10;

const fillSliderItem = (arrayObj, data, mediaType) => {
  const trendingItem = document.createElement('div');
  const infoItem = document.createElement('div');
  const trendingTitle = document.createElement('div');
  const yearItem = document.createElement('div');
  const mediaItem = document.createElement('div');
  const bookmarkItem = document.createElement('div');
  const bookmarkImg = document.createElement('img');
  trendingItem.classList.add('trending__item');
  trendingItem.dataset.id = data.id;
  trendingItem.dataset.mediaType = mediaType;
  infoItem.classList.add('trending__info');
  yearItem.classList.add('trending__year');
  mediaItem.classList.add('trending__year');
  yearItem.classList.add('trending__year');
  trendingTitle.classList.add('trending__title');
  bookmarkImg.src = '../assets/images/icon-bookmark-empty.svg';
  bookmarkItem.append(bookmarkImg);
  bookmarkItem.classList.add('bookmark');
  bookmarkItem.dataset.save = 'bookmark';

  trendingItem.style.backgroundImage = `url(https://image.tmdb.org/t/p/w710_and_h400_multi_faces${data.backdrop_path})`;
  if (data.name) {
    trendingTitle.textContent = data.name;
  } else {
    trendingTitle.textContent = data.title;
  }
  if (data.first_air_date) {
    yearItem.textContent = data.first_air_date.slice(0, 4);
  } else {
    yearItem.textContent = data.release_date.slice(0, 4);
  }
  mediaItem.textContent = data.media_type;

  infoItem.append(yearItem, mediaItem);
  trendingItem.append(infoItem, trendingTitle, bookmarkItem);
  return trendingItem;
};

const createSlider = async (mainContainer, arrayObj, allData, mediaType) => {
  const trending = document.createElement('div');
  const sectionTitle = document.createElement('div');
  const slider = document.createElement('div');

  trending.classList.add('trending');
  sectionTitle.classList.add('section__title');
  sectionTitle.textContent = arrayObj.title;
  slider.classList.add('trending__slider');

  for (let index = 0; index < numberOfSliderItems; index++) {
    const sliderItem = fillSliderItem(
      arrayObj,
      allData.results[index],
      mediaType
    );
    slider.append(sliderItem);
  }
  trending.append(sectionTitle, slider);
  console.log(trending);
  mainContainer.append(trending);
};

const trendTab = (mainContainer, arrayObj, allData, mediaType) => {
  createSlider(mainContainer, arrayObj, allData, mediaType);
};

export { trendTab };
