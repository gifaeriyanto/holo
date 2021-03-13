import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import theme from 'theme';
import { playWelcomeVideo } from 'utils/playVideos';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    playWelcomeVideo();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
