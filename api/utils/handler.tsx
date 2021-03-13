import Router from 'next/router';
import { routes } from 'utils/routes';

export const errorHandler = (error: any) => {
  switch (error.response.status) {
    case 401:
      Router.push(routes.admin.logout.url);
      break;

    default:
      break;
  }
};
