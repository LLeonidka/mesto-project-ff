// index.js
import "./pages/index.css";
import initialCards from "./components/cards.js";
import { createCard } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validate.js";
import {
  getProfileInfo,
  saveProfileInfo,
  getCards,
  addCard,
  cardDelete,
  changeAvtar,
  putLike,
  removeLike,
} from "./components/api.js";

export const profilePopupTypeImage =
  document.querySelector(".popup_type_image");
export const popups = document.querySelectorAll(".popup");
const profilePopupBtn = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".popup_type_new-card");
const popupCloseBtnElements = document.querySelectorAll(".popup__close");
const profilePopupEditButton = document.querySelector(".profile__edit-button");
const profilePopupTypeEdit = document.querySelector(".popup_type_edit");

const nameInput = profilePopup.querySelector(".popup__input_type_card-name");
const cardLinkInput = profilePopup.querySelector(".popup__input_type_url");
const formBigElementEditProfile = document.querySelector(
  'form[name="edit-profile"]'
);
const popupInputTypeName = document.querySelector(".popup__input_type_name");
const popupInputTypeDescription = document.querySelector(
  ".popup__input_type_description"
);

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");
const editForm = document.querySelector('form[name="edit-profile"]');
const popupTypeAvatar = document.querySelector(".popup_type_avatar");
const popupTupeAvatarForm = document.querySelector('form[name="edit-avatar"]');
const profileImageContainer = document.querySelector(
  ".profile__image-container"
);
const formInputAvatar = document.querySelector(".popup__input_type_url");

const formNewCard = document.querySelector('form[name="new-place"]');

const popupOverlayElse = document.querySelectorAll(".popup");

const popupImageEl = profilePopupTypeImage.querySelector("img");
const popupImageCaptionEl =
  profilePopupTypeImage.querySelector(".popup__caption");
const placesList = document.querySelector(".places__list");

let userId;

function updateProfileInfo(name, description) {
  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

function fillEditProfileForm() {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
}

function changeAvatar(url) {
  profileAvatar.style.backgroundImage = "url(" + url + ")";
}

popupTupeAvatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const imageValue = formInputAvatar.value;
  popupTupeAvatarForm.querySelector(".button").textContent = "Сохранение...";
  changeAvtar(imageValue)
    .then((res) => {
      changeAvatar(imageValue);
      closePopup(popupTypeAvatar); // Закрываем попап после успешного изменения аватара
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      popupTupeAvatarForm.querySelector(".button").textContent = "Сохранить";
    });
});

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameValue = popupInputTypeName.value;
  const jobValue = popupInputTypeDescription.value;
  editForm.querySelector(".button").textContent = "Сохранение...";
  saveProfileInfo(nameValue, jobValue)
    .then((result) => {
      closePopup(profilePopupTypeEdit);
      updateProfileInfo(nameValue, jobValue);
      console.log(result);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
    .finally(() => {
      editForm.querySelector(".button").textContent = "Сохранить";
    });
});

function cardImgHandler(data) {
  openPopup(profilePopupTypeImage);
  popupImageEl.src = data.link;
  popupImageCaptionEl.textContent = data.name;
  popupImageEl.alt = data.name;
}

function likeHandler(cardId, likeButton) {
  let isLiked = likeButton.classList.contains("card__like-button_is-active");

  if (!isLiked) {
    putLike(cardId)
      .then((result) => {
        likeButton.classList.add("card__like-button_is-active");
        console.log(result);
        likeButton.nextElementSibling.textContent = result.likes.length;
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      });
  } else {
    removeLike(cardId)
      .then((result) => {
        likeButton.classList.remove("card__like-button_is-active");
        console.log(result);
        likeButton.nextElementSibling.textContent = result.likes.length;
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      });
  }
}

function renderCards(data) {
  placesList.innerHTML = "";
  data.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      likeHandler,
      function (element) {
        cardDelete(cardData._id)
          .then((result) => {
            element.remove();
          })
          .catch((err) => {
            console.log(err); // Обработка ошибок
          });
      },
      cardImgHandler,
      userId
    );
    placesList.append(cardElement);
  });
}

// renderCards();

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
  clearValidation(editForm, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
  fillEditProfileForm();
});

popupCloseBtnElements.forEach((b) =>
  b.addEventListener("click", () =>
    closePopup(document.querySelector(".popup_is-opened"))
  )
);

profileImageContainer.addEventListener("click", () => {
  openPopup(popupTypeAvatar);
  clearValidation(popupTupeAvatarForm, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
});

formNewCard.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const cardName = nameInput.value;
  const cardUrl = cardLinkInput.value;
  formNewCard.querySelector(".button").textContent = "Сохранение...";
  addCard(cardName, cardUrl).then((data) => {
    closePopup(profilePopup);

    nameInput.value = "";
    cardLinkInput.value = "";
    formNewCard.querySelector(".button").textContent = "Сохранить";
    const cardElement = createCard(
      data,
      likeHandler,
      function (element) {
        cardDelete(data._id)
          .then((result) => {
            element.remove();
          })
          .catch((err) => {
            console.log(err); // Обработка ошибок
          });
      },
      cardImgHandler,
      userId // Передаем userId как последний аргумент
    );
    console.log(cardElement);
    placesList.prepend(cardElement);
  });
});

Promise.all([getProfileInfo(), getCards()])
  .then(([userData, cardsData]) => {
    //Здесь устанавливаем данные пользователя и рисуем карточки
    // а так же сохраняем id пользователя в глобальную переменную
    userId = userData._id;
    updateProfileInfo(userData.name, userData.about);
    renderCards(cardsData);
    //userId должна быть объявлена вне блока Promise.all, чтобы мы имели возможность передавать её в createCard при создании карточки.
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });
