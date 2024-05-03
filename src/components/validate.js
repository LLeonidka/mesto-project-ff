const showInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorMessage,
  errorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid || inputElement.validity.tooShort) {
    showInputError(
      formElement,
      inputElement,
      inputErrorClass,
      inputElement.validationMessage,
      errorClass
    );
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(inactiveButtonClass);
  }
};

const enableValidation = (settings) => {
  const {
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  } = settings;

  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(
      formElement,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
      const inputList = Array.from(this.querySelectorAll(inputSelector));
      inputList.forEach((inputElement) => {
        isValid(formElement, inputElement, inputErrorClass, errorClass);
      });
    });
  });
};

// Вызываем функцию enableValidation с объектом настроек
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

const clearValidation = (profileForm, validationConfig) => {
  const profileFormInputEls = profileForm.querySelectorAll(
    validationConfig.inputSelector
  );
  const profileSubmitButtonElement = profileForm.querySelector(
    validationConfig.submitButtonSelector
  );

  profileFormInputEls.forEach((input) => {
    input.classList.remove(validationConfig.inputErrorClass);
    input.value = "";
    hideInputError(profileForm, input);
  });
  profileForm.classList.remove(validationConfig.errorClass);
  profileSubmitButtonElement.classList.add(
    validationConfig.inactiveButtonClass
  );
  profileSubmitButtonElement.disabled = true;
};

export { enableValidation, clearValidation };
