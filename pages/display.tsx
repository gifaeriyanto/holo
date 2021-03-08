import { useInterval, Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { getVideoPlaying, playGuideVideo } from 'utils/playVideos';
import { GUIDE_VIDEO, WELCOME_VIDEO } from 'utils/variables';

const Display: NextPage = () => {
  const [playing, setPlaying] = useState(WELCOME_VIDEO);
  const [isWelcomingOrGuiding, setIsWelcomingOrGuiding] = useState(true);

  useInterval(() => {
    const videoUrl = getVideoPlaying();
    setPlaying(videoUrl);
    setIsWelcomingOrGuiding([GUIDE_VIDEO, WELCOME_VIDEO].includes(playing));
  }, 1000);

  const handleEnd = () => {
    if (!isWelcomingOrGuiding) {
      playGuideVideo();
    }
  };

  return (
    <Box bgColor="#000" h="100vh">
      <ReactPlayer
        url={playing}
        playing
        muted
        onEnded={handleEnd}
        loop={isWelcomingOrGuiding}
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default Display;
