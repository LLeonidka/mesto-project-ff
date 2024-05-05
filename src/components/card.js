// card.js
import { getProfileInfo, putLike, removeLike } from "./api";
export function createCard(data, likeHandler, onDelete, imgHandler, currentUserId) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);
const ownerId = data.owner._id

  const image = cardTemplate.querySelector(".card__image");
  image.src = data.link;
  image.alt = data.name;

  const title = cardTemplate.querySelector(".card__title");
  title.textContent = data.name;
  const likeButton = cardTemplate.querySelector(".card__like-button");
  const deleteButton = cardTemplate.querySelector(".card__delete-button");
  let isLiked = false;
  likeButton.addEventListener("click", () => likeHandler(data._id, likeButton))

  // getProfileInfo().then((userInfo) => {

    if (currentUserId === ownerId) {
      deleteButton.addEventListener("click", () => {
        onDelete(cardTemplate);
      });
    } else {
      deleteButton.remove();
    }
    if (data.likes.find((user) => user._id === currentUserId)) {
      likeButton.classList.toggle("card__like-button_is-active");
      isLiked = true;
    }
  // });

  const likeCounter = cardTemplate.querySelector(".card__like-counter");
  likeCounter.textContent = data.likes.length;
  image.addEventListener("click", () => {
    imgHandler(data);
  });

  return cardTemplate;
}





