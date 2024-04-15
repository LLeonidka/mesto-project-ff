import "./pages/index.css";
import initialCards from "./scripts/cards.js";
import { createCard, likeHandler } from "./components/card.js";
import { openPopup, closeActivePopup } from "./components/modal.js";

const profilePopupBtn = document.querySelector(".profile__add-button");
const profilePopup = document.querySelector(".popup_type_new-card");
const popupCloseBtnElements = document.querySelectorAll(".popup__close");
const profilePopupEditButton = document.querySelector(".profile__edit-button");
const profilePopupTypeEdit = document.querySelector(".popup_type_edit");

const nameInput = document.querySelector(".popup__input_type_card-name");
const jobInput = document.querySelector(".popup__input_type_url");
const formElement = document.querySelector(".popup__form");
const popupInputTypeName = document.querySelector(".popup__input_type_name");
const popupInputTypeDescription = document.querySelector(
  ".popup__input_type_description"
);

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editForm = document.querySelector('form[name="edit-profile"]');

const newForm = document.querySelector('form[name="new-place"]');

function updateProfileInfo(name, description) {
  profileTitle.textContent = name;
  profileDescription.textContent = description;
}

function fillEditProfileForm() {
  popupInputTypeName.value = profileTitle.textContent;
  popupInputTypeDescription.value = profileDescription.textContent;
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  updateProfileInfo(nameValue, jobValue); // Обновление информации на странице

  closeActivePopup();
}

formElement.addEventListener("submit", handleFormSubmit);

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Отменяем стандартное поведение формы, чтобы страница не перезагружалась

  const nameValue = popupInputTypeName.value; // Используем значения из полей редактирования профиля
  const jobValue = popupInputTypeDescription.value;

  updateProfileInfo(nameValue, jobValue); // Обновляем информацию профиля

  closeActivePopup(); // Закрываем попап редактирования профиля
});

function renderCards() {
  const placesList = document.querySelector(".places__list");

  initialCards.forEach(function (cardData) {
    const cardElement = createCard(cardData, likeHandler, function (element) {
      element.remove();
    });
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

popupCloseBtnElements.forEach((b) =>
  b.addEventListener("click", closeActivePopup)
);

newForm.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  // Получаем значения из полей ввода
  const cardName = nameInput.value;
  const cardUrl = jobInput.value;

  // Создаем новый объект данных карточки
  const newCardData = {
    name: cardName,
    link: cardUrl,
  };

  // Создаем функцию onDelete, которая удаляет карточку
  const onDelete = (element) => {
    element.remove(); // Функция для удаления карточки
  };

  // Создаем новую карточку, используя новые данные и функцию удаления
  const newCardElement = createCard(newCardData, likeHandler, onDelete);

  // Получаем контейнер списка мест
  const placesList = document.querySelector(".places__list");

  // Вставляем новую карточку в начало контейнера
  placesList.insertBefore(newCardElement, placesList.firstChild);

  // Закрываем всплывающее окно
  closeActivePopup();

  // Очищаем поля ввода
  nameInput.value = "";
  jobInput.value = "";
});
