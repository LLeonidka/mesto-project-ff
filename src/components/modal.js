// modal.js
import { popups } from "../index";

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated"); // Добавляем класс для анимации

  window.addEventListener("keydown", closePopupByPressOnEsc);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  popup.classList.remove("popup_is-animated");

  window.removeEventListener("keydown", closePopupByPressOnEsc); 
}

function closePopupByPressOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
