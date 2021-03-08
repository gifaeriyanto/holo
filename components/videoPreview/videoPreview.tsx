import { Box, ChakraProps } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';

export interface VideoPreviewProps extends ChakraProps {
  url: string;
  width?: string;
  height?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  width = '100%',
  height = 'auto',
  url,
  ...props
}) => {
  return (
    <Box
      bgColor="gray.200"
      borderRadius="lg"
      css={{
        video: {
          objectFit: 'cover',
        },
      }}
      overflow="hidden"
      {...props}
    >
      <ReactPlayer url={url} playing muted loop width={width} height={height} />
    </Box>
  );
};

export default VideoPreview;
