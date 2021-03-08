import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import VideoPreview from 'components/videoPreview';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React from 'react';

const WelcomeAndGuide: NextPage = () => {
  return (
    <AdminLayout title="Welcome and Guide">
      <HStack spacing={12}>
        <Box>
          <Heading as="h2" size="lg">
            Welcome
          </Heading>
          <VideoPreview
            url="https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm"
            mb={4}
            mt={8}
          />
          <Button>Change welcome video</Button>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Guide
          </Heading>
          <VideoPreview
            url="https://cdn.videvo.net/videvo_files/video/premium/video0040/small_watermarked/900-1_900-2983-PD2_preview.webm"
            mb={4}
            mt={8}
          />
          <Button>Change guide video</Button>
        </Box>
      </HStack>
    </AdminLayout>
  );
};

export default WelcomeAndGuide;
