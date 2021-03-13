import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://604c7c19d3e3e10017d519e3.mockapi.io/',
  timeout: 1100,
});

export const APIPaths = {
  login: '/login',
};
