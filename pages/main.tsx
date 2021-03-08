import { Box, Button } from '@chakra-ui/react';
import useInterval from '@use-it/interval';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import {
  getVideoPlaying,
  playGuideVideo,
  playVideo,
  playWelcomeVideo,
} from 'utils/playVideos';
import { GUIDE_VIDEO } from 'utils/variables';

const Main: NextPage = () => {
  const [isGuiding, setIsGuiding] = useState(true);

  const data = [
    {
      id: 1,
      title: 'Foo',
      video:
        'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm',
    },
    {
      id: 2,
      title: 'Lorem',
      video:
        'https://cdn.videvo.net/videvo_files/video/premium/video0040/small_watermarked/900-1_900-2983-PD2_preview.webm',
    },
    {
      id: 3,
      title: 'Bar',
      video:
        'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
    },
  ];

  useInterval(() => {
    const videoUrl = getVideoPlaying();
    setIsGuiding(GUIDE_VIDEO === videoUrl);
  }, 1000);

  const handleOnIdle = () => {
    if (isGuiding) {
      playWelcomeVideo();
    }
  };

  const handleOnActive = () => {
    playGuideVideo();
  };

  const { reset } = useIdleTimer({
    timeout: 1000 * 2, // 2s
    onIdle: handleOnIdle,
    onActive: handleOnActive,
  });

  useEffect(() => {
    if (isGuiding) {
      reset();
    }
  }, [isGuiding]);

  const listOfContent = data.map((content) => (
    <Button
      key={content.id}
      onClick={() => {
        playVideo(content.video);
      }}
    >
      {content.title}
    </Button>
  ));

  return <Box p={10}>{listOfContent}</Box>;
};

export default Main;
