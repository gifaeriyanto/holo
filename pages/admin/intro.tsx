import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import InputFile from 'components/inputFile';
import VideoPreview from 'components/videoPreview';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React from 'react';

const WelcomeAndGuide: NextPage = () => {
  return (
    <AdminLayout title="Intro">
      <Grid templateColumns="repeat(2, 1fr)">
        <VStack spacing={4} align="baseline">
          <VideoPreview url="https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm" />

          <FormControl>
            <FormLabel>Greeting Message</FormLabel>
            <Textarea placeholder="e.g. Welcome to Foo" />
          </FormControl>
          <InputFile>Change welcome video</InputFile>
        </VStack>
      </Grid>
      <Button colorScheme="blue" mt={8}>
        Save update
      </Button>
    </AdminLayout>
  );
};

export default WelcomeAndGuide;
