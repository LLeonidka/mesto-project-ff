


function createCard(data, onDelete) {
    const cardTemplate = document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
  
    const image = cardTemplate.querySelector('.card__image');
    image.src = data.link;
    image.alt = data.name;
  
    const title = cardTemplate.querySelector('.card__title');
    title.textContent = data.name;
  
    const deleteButton = cardTemplate.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {
      onDelete(cardTemplate);
    });
  
    return cardTemplate;
  }
  
  function renderCards() {
    const placesList = document.querySelector('.places__list');
  
    initialCards.forEach(function(cardData) {
        const cardElement = createCard(cardData, function(element) {
          element.remove(); 
      });
      placesList.appendChild(cardElement);
    });
  }
  
  renderCards();
