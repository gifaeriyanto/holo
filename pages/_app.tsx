import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { playWelcomeVideo } from 'utils/playVideos';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    playWelcomeVideo();
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
