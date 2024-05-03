// index.js
import "./pages/index.css";
import initialCards from "./components/cards.js";
import { createCard, likeHandler } from "./components/card.js";
import { openPopup, closePopup } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validate.js";
import {
  getProfileInfo,
  saveProfileInfo,
  getCards,
  addCard,
  cardDelete,
  changeAvtar,
} from "./components/api.js";

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
  console.log(imageValue);
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
      closePopup(document.querySelector(".popup_is-opened"));
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
  profilePopupTypeImage.querySelector("img").src = data.link;
  profilePopupTypeImage.querySelector(".popup__caption").textContent =
    data.name;
  profilePopupTypeImage.querySelector("img").alt = data.name;
}

function renderCards(data) {
  const placesList = document.querySelector(".places__list");
  placesList.innerHTML = "";
  data.forEach(function (cardData) {
    const cardElement = createCard(
      cardData,
      function (element) {
        element.classList.toggle("card__like-button_is-active");
      },
      function (element) {
        cardDelete(cardData._id).then((result) => {
          console.log(result);
          element.remove();
        });
      },
      cardImgHandler
    );
    console.log(cardElement);
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
  const cardUrl = jobInput.value;
  formNewCard.querySelector(".button").textContent = "Сохранение...";
  addCard(cardName, cardUrl).then((data) => {
    closePopup(document.querySelector(".popup_is-opened"));

    nameInput.value = "";
    jobInput.value = "";
    getCards()
      .then((data) => {
        renderCards(data);
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль
      })
      .finally(() => {
        formNewCard.querySelector(".button").textContent = "Сохранить";
      });
  });
});

popupOverlayElse.forEach((overlay) =>
  overlay.addEventListener("click", (evt) => {
    if (evt.target == overlay) {
      closePopup(document.querySelector(".popup_is-opened"));
    }
  })
);

getProfileInfo()
  .then(({ name, about }) => {
    updateProfileInfo(name, about);
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });

getCards()
  .then((data) => {
    renderCards(data);
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль
  });