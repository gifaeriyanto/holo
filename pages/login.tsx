import {
  useToast,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useAuth, LoginParams } from 'api/auth';
import noAuth from 'layouts/admin/hoc/noAuth';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { routes } from 'utils/routes';
import { LOCALSTORAGE_KEYS } from 'utils/variables';

const Login: NextPage = () => {
  const router = useRouter();
  const { register, errors, handleSubmit } = useForm();
  const [loginParams, setLoginParams] = useState<LoginParams>({
    username: '',
    password: '',
  });
  const toast = useToast();
  const { data: authData, isError, isFetching, refetch } = useAuth(loginParams);

  const onSubmit = (data: LoginParams) => {
    setLoginParams(data);
  };

  useEffect(() => {
    if (loginParams.username) {
      refetch();
    }
  }, [loginParams]);

  useEffect(() => {
    if (authData?.access_token) {
      localStorage.setItem(
        LOCALSTORAGE_KEYS.accessToken,
        authData.access_token,
      );
      router.push(routes.admin.dashboard.url);
    }
  }, [authData]);

  useEffect(() => {
    if (isError) {
      toast({
        position: 'top',
        title: 'Something error',
        status: 'error',
        description: (
          <>
            <p>Refresh the page and try again!</p>
            <Flex justify="flex-end">
              <Button
                colorScheme="red"
                bgColor="red.600"
                mt={4}
                size="sm"
                onClick={() => location.reload()}
              >
                Refresh page
              </Button>
            </Flex>
          </>
        ),
      });
    }
  }, [isError]);

  return (
    <Flex
      p={10}
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-b, #0575E6, #021B79)"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box bgColor="white" p={12} borderRadius="lg" w="400px">
        <Heading mb={12}>Login</Heading>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.username} isDisabled={isFetching}>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              ref={register({
                required: 'Username is required',
              })}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password} isDisabled={isFetching}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              ref={register({
                required: 'Password is required',
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            <FormHelperText>
              Ask sevenvisual cs if you forget the password!
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              mt={4}
              isFullWidth
              isDisabled={isFetching}
            >
              {isFetching ? 'Waiting...' : 'Login'}
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </Flex>
  );
};

export default noAuth(Login);
