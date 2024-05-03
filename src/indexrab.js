// index.js
import "./pages/index.css";
import initialCards from "./components/cards.js";
import { createCard, likeHandler, onDelete } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validate.js";

export const profilePopupTypeImage =
  document.querySelector(".popup_type_image");
export const popups = document.querySelectorAll(".popup");
const profilePopupBtn = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".popup_type_new-card");
const popupCloseBtnElements = document.querySelectorAll(".popup__close");
const profilePopupEditButton = document.querySelector(".profile__edit-button");
const profilePopupTypeEdit = document.querySelector(".popup_type_edit");

const nameInput = document.querySelector(".popup__input_type_card-name");
const jobInput = document.querySelector(".popup__input_type_url");
const formBigElementEditProfile = document.querySelector(
  'form[name="edit-profile"]'
);
const popupInputTypeName = document.querySelector(".popup__input_type_name");
const popupInputTypeDescription = document.querySelector(
  ".popup__input_type_description"
);

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editForm = document.querySelector('form[name="edit-profile"]');

const formNewCard = document.querySelector('form[name="new-place"]');

const popupOverlayElse = document.querySelectorAll(".popup");

function updateProfileInfo(name, description) {
  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

function fillEditProfileForm() {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  updateProfileInfo(nameValue, jobValue);
}

formBigElementEditProfile.addEventListener(
  "submit",
  handleEditProfileFormSubmit
);

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const nameValue = popupInputTypeName.value;
  const jobValue = popupInputTypeDescription.value;

  updateProfileInfo(nameValue, jobValue);

  closePopup(document.querySelector(".popup_is-opened"));
});

function cardImgHandler(data) {
  openPopup(profilePopupTypeImage);
  profilePopupTypeImage.querySelector("img").src = data.link;
  profilePopupTypeImage.querySelector(".popup__caption").textContent =
    data.name;
  profilePopupTypeImage.querySelector("img").alt = data.name;
}

function renderCards() {
  const placesList = document.querySelector(".places__list");

  initialCards.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      likeHandler,
      function (element) {
        element.remove();
      },
      cardImgHandler
    );
    placesList.insertBefore(cardElement, placesList.firstChild);
  });
}

renderCards();

profilePopupBtn.addEventListener("click", () => {
  openPopup(profilePopup);
  clearValidation(formNewCard, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
});

profilePopupEditButton.addEventListener("click", () => {
  openPopup(profilePopupTypeEdit);
  fillEditProfileForm();
  clearValidation(editForm, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
});

popupCloseBtnElements.forEach((b) =>
  b.addEventListener("click", () =>
    closePopup(document.querySelector(".popup_is-opened"))
  )
);

formNewCard.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const cardName = nameInput.value;
  const cardUrl = jobInput.value;

  const newCardData = {
    name: cardName,
    link: cardUrl,
  };

  const newCardElement = createCard(
    newCardData,
    likeHandler,
    onDelete,
    cardImgHandler
  );

  const placesList = document.querySelector(".places__list");

  placesList.insertBefore(newCardElement, placesList.firstChild);

  closePopup(document.querySelector(".popup_is-opened"));

  nameInput.value = "";
  jobInput.value = "";
});

popupOverlayElse.forEach((overlay) =>
  overlay.addEventListener("click", (evt) => {
    if (evt.target == overlay) {
      closePopup(document.querySelector(".popup_is-opened"));
    }
  })
);