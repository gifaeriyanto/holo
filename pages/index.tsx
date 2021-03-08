import { Box, Button, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { playGuideVideo } from 'utils/playVideos';

const Index: NextPage = () => {
  const handleOnStart = () => {
    playGuideVideo();
  };

  return (
    <Box p={10}>
      <Heading mb={4}>Welcome</Heading>
      <Link href="/main">
        <a>
          <Button onClick={handleOnStart}>Get started</Button>
        </a>
      </Link>
    </Box>
  );
};

export default Index;
