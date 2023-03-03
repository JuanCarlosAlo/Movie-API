const modal = document.getElementById('modal');
const modalCross = document.getElementById('modal-cross');
const modalPoster = document.getElementById('modal-poster');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalRating = document.getElementById('modal-rating');
const modalLength = document.getElementById('modal-length');
const modalLanguage = document.getElementById('modal-language');
const modalYear = document.getElementById('modal-year');
const modalStatus = document.getElementById('modal-status');
const modalGenres = document.getElementById('modal-genre');
const modalPsinopsis = document.getElementById('modal-psinopsis');
const modalCast = document.getElementById('modal-cast');

const modalFill = allDetailsData => {
  modalPoster.src =
    'https://image.tmdb.org/t/p/original//' + allDetailsData.poster_path;
};

const modalOpen = allDetailsData => {
  modal.classList.add('modal--show');
  modalFill(allDetailsData);
};

modalCross.addEventListener('click', e => {
  modal.classList.remove('modal--show');
});

export { modalOpen };
