// index.js
import "./pages/index.css";
import initialCards from "./components/cards.js";
import { createCard, likeHandler } from "./components/card.js";
import { openPopup, closeActivePopup } from "./components/modal.js";

export const profilePopupTypeImage = document.querySelector(".popup_type_image");
export const popups = document.querySelectorAll(".popup");
const profilePopupBtn = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".popup_type_new-card");
const popupCloseBtnElements = document.querySelectorAll(".popup__close");
const profilePopupEditButton = document.querySelector(".profile__edit-button");
const profilePopupTypeEdit = document.querySelector(".popup_type_edit");

const nameInput = document.querySelector(".popup__input_type_card-name");
const jobInput = document.querySelector(".popup__input_type_url");
const formElementEditProfile = document.querySelector(".popup__form");
const popupInputTypeName = document.querySelector(".popup__input_type_name");
const popupInputTypeDescription = document.querySelector(
  ".popup__input_type_description"
);

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editForm = document.querySelector('form[name="edit-profile"]');

const formNewCard = document.querySelector('form[name="new-place"]');

function updateProfileInfo(name, description) {
  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

function fillEditProfileForm() {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
}

function handleFormSubmitTag(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  updateProfileInfo(nameValue, jobValue);

  closeActivePopup();
}

formElementEditProfile.addEventListener("submit", handleFormSubmitTag);

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const nameValue = popupInputTypeName.value;
  const jobValue = popupInputTypeDescription.value;

  updateProfileInfo(nameValue, jobValue);

  closeActivePopup();
});

function renderCards() {
  const placesList = document.querySelector(".places__list");

  initialCards.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      likeHandler,
      function (element) {
        element.remove();
      },
      profilePopupTypeImage
    );
    placesList.insertBefore(cardElement, placesList.firstChild);
  });
}

renderCards();

profilePopupBtn.addEventListener("click", () => {
  openPopup(profilePopup);
});

profilePopupEditButton.addEventListener("click", () => {
  openPopup(profilePopupTypeEdit);
  fillEditProfileForm();
});

popupCloseBtnElements.forEach((b) => b.addEventListener("click", closeActivePopup));

formNewCard.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const cardName = nameInput.value;
  const cardUrl = jobInput.value;

  const newCardData = {
    name: cardName,
    link: cardUrl,
  };

  const onDelete = (element) => {
    element.remove();
  };

  const newCardElement = createCard(newCardData, likeHandler, onDelete, profilePopupTypeImage);

  const placesList = document.querySelector(".places__list");

  placesList.insertBefore(newCardElement, placesList.firstChild);

  closeActivePopup();

  nameInput.value = "";
  jobInput.value = "";
});
