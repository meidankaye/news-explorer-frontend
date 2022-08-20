const BASE_URL = "https://api.meidankaye.students.nomoredomainssbs.ru";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const generateCustomHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  };
};

export const register = ({ email, password, username }) => {
  console.log(username)
  console.log(email)
  console.log(password);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name: username }),
  }).then(checkResponse);
};

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const validateToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: generateCustomHeaders(),
  }).then(checkResponse);
};

export const getCurrentUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: generateCustomHeaders(),
  }).then(checkResponse);
};

export const getArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: generateCustomHeaders(),
  }).then(checkResponse);
};

export const saveArticle = (keyword, card) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: generateCustomHeaders(),
    body: JSON.stringify({
      keyword,
      title: card.data.title,
      text: card.data.description,
      date: card.data.publishedAt,
      source: card.data.source.name,
      image: card.data.urlToImage,
      link: card.data.url,
    }),
  }).then(checkResponse);
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: generateCustomHeaders(),
  }).then(checkResponse);
};
