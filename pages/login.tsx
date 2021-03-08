import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => {
  return (
    <Flex
      p={10}
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-b, #0575E6, #021B79)"
    >
      <Box bgColor="white" p={12} borderRadius="lg" w="400px">
        <Heading mb={12}>Login</Heading>
        <VStack as="form" spacing={4}>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input name="username" />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="username" />
            <FormHelperText>
              Ask sevenvisual cs if you forget the password!
            </FormHelperText>
          </FormControl>

          <FormControl>
            <Button colorScheme="blue" size="lg" mt={4} isFullWidth>
              Login
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
