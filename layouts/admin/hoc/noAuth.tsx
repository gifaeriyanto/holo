import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const noAuth = (WrappedComponent) => {
  const noAuthHoc = ({ ...props }) => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('access-token')) {
        router.back();
        return;
      }
      setMounted(true);
      return () => {
        setMounted(false);
      };
    }, []);

    return mounted ? <WrappedComponent {...props} /> : null;
  };

  return noAuthHoc;
};

export default noAuth;
