export const APIPaths = {
  login: '/login',
  items: '/api/v1/admin/contents',
  welcome: '/api/v1/admin/welcome',
  updateWelcome: '/api/v1/admin/welcome/update',
  createItem: '/api/v1/admin/content/create',
  updateItem: (id: string) => `/api/v1/admin/content/${id}/update`,
  deleteItem: (id: string) => `/api/v1/admin/content/${id}/delete`,
};
