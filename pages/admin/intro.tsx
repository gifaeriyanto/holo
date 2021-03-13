import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { updateWelcome, useWelcome, UpdateWelcomeParams } from 'api/welcome';
import InputFile from 'components/inputFile';
import VideoPreview from 'components/videoPreview';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const WelcomeAndGuide: NextPage = () => {
  const [video, setVideo] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, refetch } = useWelcome();
  const { register, handleSubmit } = useForm();

  const onSubmit = (params: UpdateWelcomeParams) => {
    setIsSubmitting(true);
    updateWelcome({
      message: params.message,
      video,
    }).then(() => {
      setIsSubmitting(false);
      setVideo(undefined);
      refetch();
    });
  };

  const handleChangeVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideo(e.currentTarget.files[0]);
  };

  return (
    <AdminLayout title="Intro">
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid templateColumns="repeat(2, 1fr)">
          <VStack spacing={4} align="baseline">
            <VideoPreview url={data?.video} />
            <InputFile
              name="video"
              onChange={handleChangeVideo}
              isDisabled={isSubmitting}
              accept=".mp4"
            >
              Change welcome video
            </InputFile>

            <FormControl isDisabled={isSubmitting}>
              <FormLabel>Greeting Message</FormLabel>
              <Textarea
                name="message"
                placeholder="e.g. Welcome to Foo"
                defaultValue={data?.message}
                ref={register}
              />
            </FormControl>
          </VStack>
        </Grid>
        <Button
          colorScheme="blue"
          mt={8}
          type="submit"
          isDisabled={isSubmitting}
        >
          {!isSubmitting ? 'Save update' : 'Saving...'}
        </Button>
      </Box>
    </AdminLayout>
  );
};

export default WelcomeAndGuide;
