// modal.js
const popups = document.querySelectorAll(".popup");

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated"); // Добавляем класс для анимации
  window.addEventListener("click", closePopupByClickOnOverlay);
  window.addEventListener("keydown", closePopupByPressOnEsc);
}

export function closeActivePopup() {
  const activePopup = document.querySelector(".popup_is-opened");
  if (activePopup) {
    activePopup.classList.remove("popup_is-opened");
    activePopup.classList.remove("popup_is-animated");
  }
  window.removeEventListener("click", closePopupByClickOnOverlay);
  window.removeEventListener("keydown", closePopupByPressOnEsc);
}

function closePopupByPressOnEsc(evt) {
  if (evt.key === "Escape") {
    closeActivePopup();
  }
}

function closePopupByClickOnOverlay(evt) {
  const popups = document.querySelectorAll(".popup");
  if ([...popups].includes(evt.target)) {
    closeActivePopup();
  }
}
