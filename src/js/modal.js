const modal = document.getElementById("modal");
const modalCross = document.getElementById("modal-cross");
const modalPoster = document.getElementById("modal-poster");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalRating = document.getElementById("modal-rating");
const modalLength = document.getElementById("modal-length");
const modalLanguage = document.getElementById("modal-language");
const modalYear = document.getElementById("modal-year");
const modalStatus = document.getElementById("modal-status");
const modalGenres = document.getElementById("modal-genres");
const modalPsinopsis = document.getElementById("modal-psynopsis");
const modalCast = document.getElementById("modal-casts");

const modalButton = (text) => {
  const modalButton = document.createElement("div");
  modalButton.classList.add("modal-button");
  modalButton.textContent = text;

  return modalButton;
};

const modalFill = (allDetailsData) => {
  const modalObj = [
    {
      modal: modalTitle,
      text: "title",
    },
    {
      modal: modalDescription,
      text: "tagline",
    },
    {
      modal: modalRating,
      text: "vote_average",
    },
    {
      modal: modalLength,
      text: "runtime",
    },
    {
      modal: modalLanguage,
      text: "original_language",
    },
    {
      modal: modalYear,
      text: "release_date",
    },
    {
      modal: modalStatus,
      text: "status",
    },

    {
      modal: modalPsinopsis,
      text: "overview",
    },
  ];
  modalPoster.src =
    "https://image.tmdb.org/t/p/original//" + allDetailsData.poster_path;
  modalObj.forEach((element) => {
    element.modal.textContent = allDetailsData[element.text];

    if (element.text === "vote_average") {
      element.modal.textContent = (
        Number(allDetailsData[element.text]) / 2
      ).toFixed(1);
    }
  });
};

const modalOpen = (allDetailsData, allCreditsData) => {
  modal.classList.add("modal--show");
  modalFill(allDetailsData);
  allDetailsData.genres.forEach((genre) => {
    const genresItem = modalButton(genre.name);

    modalGenres.append(genresItem);
  });
  allDetailsData.genres.forEach((genre) => {
    const genresItem = modalButton(genre.name);

    modalGenres.append(genresItem);
  });
  allCreditsData.cast.forEach((cast) => {
    const castItem = modalButton(cast.name);
    modalCast.append(castItem);
  });
};

modalCross.addEventListener("click", (e) => {
  modal.classList.remove("modal--show");
});

export { modalOpen };
