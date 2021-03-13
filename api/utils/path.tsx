export const APIPaths = {
  login: '/login',
  items: '/api/v1/admin/contents',
  createItem: '/api/v1/admin/content/create',
  updateItem: (id: string) => `/api/v1/admin/content/${id}/update`,
  deleteItem: (id: string) => `/api/v1/admin/content/${id}/delete`,
};
