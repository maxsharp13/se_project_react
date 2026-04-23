import { checkResponse } from "./api";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.YOURDOMAIN.com"
    : "http://localhost:3001";

export const register = (data) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(checkResponse);
};

export const login = (data) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
