import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import VideoPreview from 'components/videoPreview';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React from 'react';

const Items: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      video:
        'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      video:
        'https://cdn.videvo.net/videvo_files/video/premium/video0040/small_watermarked/900-1_900-2983-PD2_preview.webm',
    },
    {
      id: 3,
      title: 'Similique quas dolore vel?',
      video:
        'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
    },
  ];

  return (
    <AdminLayout title="Items">
      <VStack spacing={4}>
        {data.map((item) => (
          <Flex
            w="100%"
            align="center"
            borderBottom="2px dashed"
            borderColor="gray.300"
            pb={4}
          >
            <VideoPreview
              url={item.video}
              width="150px"
              height="150px"
              mr={12}
            />
            <Box>
              <Text fontSize="lg" mb={4} fontWeight="bold">
                {item.title}
              </Text>
              <HStack>
                <Button>Edit</Button>
                <Button colorScheme="red" onClick={onOpen}>
                  Delete
                </Button>
              </HStack>
            </Box>
          </Flex>
        ))}
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete item</ModalHeader>
          <ModalBody>Are you sure want to delete this item?</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={4} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red">Yes, sure</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AdminLayout>
  );
};

export default Items;
