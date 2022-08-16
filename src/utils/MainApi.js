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

export const register = (user) => {};
