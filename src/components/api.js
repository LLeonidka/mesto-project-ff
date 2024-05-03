const BASE_URL = "https://nomoreparties.co/v1/wff-cohort-11";
const TOKEN = "7d389222-4963-4e60-abeb-254664ef8ba1";

async function checkResponse(response) {
  if (response.ok) {
    return await response.json();
  } else {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
}

export async function getProfileInfo() {
  const response = await fetch(BASE_URL + "/users/me", {
    headers: {
      authorization: TOKEN,
    },
  });
  return checkResponse(response);
}

export async function saveProfileInfo(name, about) {
  const response = await fetch(BASE_URL + "/users/me", {
    method: "PATCH",
    headers: {
      authorization: TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, about }),
  });
  return checkResponse(response);
}

export async function getCards() {
  const response = await fetch(BASE_URL + "/cards", {
    headers: {
      authorization: TOKEN,
    },
  });
  return checkResponse(response);
}

export async function addCard(name, link) {
  const response = await fetch(BASE_URL + "/cards", {
    body: JSON.stringify({ name, link }),
    method: "POST",
    headers: {
      authorization: TOKEN,
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
}

export async function cardDelete(_id) {
  const response = await fetch(BASE_URL + "/cards/" + _id, {
    method: "DELETE",
    headers: {
      authorization: TOKEN,
    },
  });
  return checkResponse(response);
}

export async function putLike(_id) {
  const response = await fetch(BASE_URL + "/cards/likes/" + _id, {
    method: "PUT",
    headers: {
      authorization: TOKEN,
    },
  });
  return checkResponse(response);
}

export async function removeLike(_id) {
  const response = await fetch(BASE_URL + "/cards/likes/" + _id, {
    method: "DELETE",
    headers: {
      authorization: TOKEN,
    },
  });
  return checkResponse(response);
}

export async function changeAvtar(avatar) {
  const response = await fetch(BASE_URL + "/users/me/avatar", {
    method: "PATCH",
    headers: {
      authorization: TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({avatar})
  });
  return checkResponse(response);
}

// const BASE_URL = "https://nomoreparties.co/v1/wff-cohort-11";

// const headers = {
//     Authorization: "7d389222-4963-4e60-abeb-254664ef8ba1",
//     "Content-Type": "application/json",
//   };

// // Объект с маршрутами API
// const apiRoutes = {
//   user: "users/me",
//   cards: "cards",
//   likes: "likes",
// };

// // Функция для проверки данных
// const checkData = (data) => {
//   if (data.ok) {
//     return data.json();
//   } else {
//     return Promise.reject(`Error: ${data.status}`);
//   }
// };

// // Функция для отправки запроса
// function request(endpoint, options) {
//   return fetch(`${BASE_URL}/${endpoint}`, options).then(checkData);
// }

// // Получение всех карточек
// const getCards = () => {
//   return request(apiRoutes.cards, {
//     method: "GET",
//     headers,
//   });
// };

// // Добавление новой карточки
// const postCard = (name, link) => {
//   return request(apiRoutes.cards, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({
//       name,
//       link,
//     }),
//   });
// };

// // Удаление карточки по идентификатору
// const deleteCardApi = (id) => {
//   return request(`${apiRoutes.cards}/${id}`, {
//     method: "DELETE",
//     headers,
//   });
// };

// // Получение информации о пользователе
// const getUser = () => {
//   return request(apiRoutes.user, {
//     method: "GET",
//     headers,
//   });
// };

// // Обновление информации о пользователе
// const patchUser = (name, about) => {
//   return request(apiRoutes.user, {
//     method: "PATCH",
//     headers,
//     body: JSON.stringify({
//       name,
//       about,
//     }),
//   });
// };

// // Добавление лайка карточке
// const addLikeCard = (id)  => {
//   return request(`${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
//     method: "PUT",
//     headers
//   });
// };

// // Удаление лайка с карточки
// const deleteLikeCard = (id) => {
//   return request(`${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
//     method: "DELETE",
//     headers,
//   });
// };

// // Обновление аватара пользователя
// const patchAvatar = (avatar) => {
//   return request(`${apiRoutes.user}/avatar`, {
//     method: "PATCH",
//     headers,
//     body: JSON.stringify({ avatar: avatar }),
//   });
// };

// const getCardsWithLikes = async () => {
//     try {
//       const cards = await getCards(); // Получаем все карточки
//       const cardsWithLikes = await Promise.all(cards.map(async (card) => {
//         const likesResponse = await request(`${apiRoutes.cards}/${card._id}/${apiRoutes.likes}`, {
//           method: "GET",
//           headers,
//         });
//         const likesData = await likesResponse.json();
//         return {
//           ...card,
//           likesCount: likesData.length // Добавляем количество лайков к карточке
//         };
//       }));
//       return cardsWithLikes;
//     } catch (error) {
//       console.error("Error fetching cards with likes:", error);
//       throw error;
//     }
//   };

// export {
//   getCards,
//   postCard,
//   deleteCardApi,
//   getUser,
//   patchUser,
//   addLikeCard,
//   deleteLikeCard,
//   patchAvatar,
// };
