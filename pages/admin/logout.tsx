import { useTimeout } from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { routes } from 'utils/routes';
import { LOCALSTORAGE_KEYS } from 'utils/variables';

const Logout: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem(LOCALSTORAGE_KEYS.accessToken);
    router.push(routes.client.login.url);
  }, []);

  return <AdminLayout title="Logout..." />;
};

export default Logout;
