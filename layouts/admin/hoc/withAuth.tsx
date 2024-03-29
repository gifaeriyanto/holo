import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { routes } from 'utils/routes';

const withAuth = (WrappedComponent) => {
  const withAuthHoc = ({ ...props }) => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      if (!localStorage.getItem('access-token')) {
        router.push(routes.client.login.url);
        return;
      }
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []);

    return mounted ? <WrappedComponent {...props} /> : null;
  };

  return withAuthHoc;
};

export default withAuth;
