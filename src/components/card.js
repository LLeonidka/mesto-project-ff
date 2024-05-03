// card.js
import { getProfileInfo, putLike, removeLike } from "./api";
export function createCard(data, likeHandler, onDelete, imgHandler) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const image = cardTemplate.querySelector(".card__image");
  image.src = data.link;
  image.alt = data.name;

  const title = cardTemplate.querySelector(".card__title");
  title.textContent = data.name;
  const likeButton = cardTemplate.querySelector(".card__like-button");
  const deleteButton = cardTemplate.querySelector(".card__delete-button");
  let isLiked = false
  likeButton.addEventListener("click", () => {
    if(!isLiked){
      putLike(data._id).then((result)=>{
        likeButton.classList.add("card__like-button_is-active")
        console.log(result)
        isLiked=true
        likeCounter.textContent = result.likes.length
      })
    } else {
      removeLike(data._id).then((result)=>{
        likeButton.classList.remove("card__like-button_is-active")
        console.log(result)
        isLiked=false
        likeCounter.textContent = result.likes.length
      })
    }
  });
  getProfileInfo().then(userInfo=>{
    if(userInfo.name === data.owner.name ){
      deleteButton.addEventListener("click", () => {
        onDelete(cardTemplate);
      });
    } else {
      deleteButton.remove()
    }
    if(data.likes.find(user=>user.name===userInfo.name)){
      likeButton.classList.toggle("card__like-button_is-active")
      isLiked = true
      likeCounter.textContent = data.likes.length
    }
  })
  
  const likeCounter = cardTemplate.querySelector(".card__like-counter");
  likeCounter.textContent = data.likes.length;
  image.addEventListener("click", () => {
    imgHandler(data);
  });

  return cardTemplate;
}

// export function onDelete(element) {
//   element.remove();
// }

// export function likeHandler(likeButton) {
//   likeButton.classList.toggle("card__like-button_is-active");
// }
