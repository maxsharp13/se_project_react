import { checkResponse } from "./api";

const baseUrl = "http://localhost:3001";

export const register = (email, password, name, avatar) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name, avatar }),
  }).then(checkResponse);
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};