import axios from 'axios';

export const API = axios.create({
  // baseURL: 'https://604c7c19d3e3e10017d519e3.mockapi.io/',
  baseURL: 'http://3aa3de2db595.ngrok.io/',
});

export const APIPaths = {
  login: '/login',
  items: '/api/v1/admin/contents',
  updateItem: (id: string) => `/api/v1/admin/content/${id}/update`,
};
