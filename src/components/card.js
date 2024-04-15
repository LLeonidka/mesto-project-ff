// card.js
import { openPopup, closeActivePopup } from "./modal";

export function createCard(data, likeHandler, onDelete, captionElement) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const image = cardTemplate.querySelector(".card__image");
  image.src = data.link;
  image.alt = data.name;

  const title = cardTemplate.querySelector(".card__title");
  title.textContent = data.name;

  const deleteButton = cardTemplate.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    onDelete(cardTemplate);
  });

  const likeButton = cardTemplate.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeHandler(likeButton);
  });

image.addEventListener("click", () => {
  openPopup(captionElement);
  captionElement.querySelector("img").src = data.link;
  captionElement.querySelector(".popup__caption").textContent = data.name;
});

  return cardTemplate;
}


export function likeHandler(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
