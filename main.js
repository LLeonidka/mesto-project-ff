(()=>{"use strict";function e(e,t,n,o){var r=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=r.querySelector(".card__image");c.src=e.link,c.alt=e.name,r.querySelector(".card__title").textContent=e.name,r.querySelector(".card__delete-button").addEventListener("click",(function(){n(r)}));var u=r.querySelector(".card__like-button");return u.addEventListener("click",(function(){t(u)})),c.addEventListener("click",(function(){o(e)})),r}function t(e){e.remove()}function n(e){e.classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),window.addEventListener("keydown",c)}function r(e){e.classList.remove("popup_is-opened"),e.classList.remove("popup_is-animated"),window.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var u,p=document.querySelector(".popup_type_image"),i=(document.querySelectorAll(".popup"),document.querySelector(".profile__add-button")),d=document.querySelector(".popup_type_new-card"),l=document.querySelectorAll(".popup__close"),a=document.querySelector(".profile__edit-button"),s=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup__input_type_card-name"),_=document.querySelector(".popup__input_type_url"),y=document.querySelector('form[name="edit-profile"]'),f=document.querySelector(".popup__input_type_name"),v=document.querySelector(".popup__input_type_description"),q=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),k=document.querySelector('form[name="edit-profile"]'),L=document.querySelector('form[name="new-place"]'),E=document.querySelectorAll(".popup");function h(e,t){q.textContent=e,S.textContent=t}function g(e){o(p),p.querySelector("img").src=e.link,p.querySelector(".popup__caption").textContent=e.name,p.querySelector("img").alt=e.name}y.addEventListener("submit",(function(e){e.preventDefault();var t=m.value,n=_.value;q.textContent=t,S.textContent=n,h(t,n)})),k.addEventListener("submit",(function(e){e.preventDefault(),h(f.value,v.value),r(document.querySelector(".popup_is-opened"))})),u=document.querySelector(".places__list"),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(t){var o=e(t,n,(function(e){e.remove()}),g);u.insertBefore(o,u.firstChild)})),i.addEventListener("click",(function(){o(d)})),a.addEventListener("click",(function(){o(s),f.value=q.textContent,v.value=S.textContent})),l.forEach((function(e){return e.addEventListener("click",(function(){return r(document.querySelector(".popup_is-opened"))}))})),L.addEventListener("submit",(function(o){o.preventDefault();var c=e({name:m.value,link:_.value},n,t,g),u=document.querySelector(".places__list");u.insertBefore(c,u.firstChild),r(document.querySelector(".popup_is-opened")),m.value="",_.value=""})),E.forEach((function(e){return e.addEventListener("click",(function(t){t.target==e&&r(document.querySelector(".popup_is-opened"))}))}))})();