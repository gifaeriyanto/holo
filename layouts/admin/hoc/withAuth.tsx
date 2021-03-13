import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { routes } from 'utils/routes';

const WithAuthHOC: React.FC = ({ children }) => {
  const router = useRouter();
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      router.push(routes.client.login.url);
    } else {
      setSigned(true);
    }
  }, []);

  return <>{signed ? children : null}</>;
};

export default WithAuthHOC;
