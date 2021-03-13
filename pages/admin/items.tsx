import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import InputFile from 'components/inputFile';
import VideoPreview from 'components/videoPreview';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiPencilFill, RiDeleteBin2Fill } from 'react-icons/ri';

const Items: NextPage = () => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const [editKey, setEditKey] = useState(-1);

  useEffect(() => {
    if (!isOpenEdit) {
      setEditKey(-1);
    }
  }, [isOpenEdit]);

  const data = [
    {
      id: '1',
      title: 'Lorem ipsum dolor sit amet',
      video:
        'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm',
    },
    {
      id: '2',
      title: 'Lorem ipsum dolor sit amet consectetur.',
      video:
        'https://cdn.videvo.net/videvo_files/video/premium/video0040/small_watermarked/900-1_900-2983-PD2_preview.webm',
    },
    {
      id: '3',
      title: 'Similique quas dolore vel?',
      video:
        'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
    },
    {
      id: '4',
      title: 'Similique quas dolore vel?',
      video:
        'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
    },
  ];

  return (
    <AdminLayout
      title="Items"
      addOns={
        <Button leftIcon={<IoMdAdd />} colorScheme="blue" onClick={onOpenEdit}>
          Add new item
        </Button>
      }
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {data.map((item, key) => (
          <Box pb={4} pos="relative">
            <VideoPreview url={item.video} width="100%" height="200px" />
            <HStack pos="absolute" top="10px" right="10px">
              <IconButton
                aria-label="Ddit item"
                icon={<RiPencilFill />}
                onClick={() => {
                  onOpenEdit();
                  setEditKey(key);
                }}
              />
              <IconButton
                aria-label="Delete item"
                icon={<RiDeleteBin2Fill />}
                colorScheme="red"
                onClick={onOpenDelete}
              />
            </HStack>
            <Text
              fontSize="lg"
              fontWeight="bold"
              overflowY="hidden"
              h="34px"
              mt={2}
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpenDelete} onClose={onCloseDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete item</ModalHeader>
          <ModalBody>Are you sure want to delete this item?</ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={4} onClick={onCloseDelete}>
              Cancel
            </Button>
            <Button colorScheme="red">Yes, sure</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editKey < 0 ? 'Create new' : 'Edit'} item</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Title"
                  defaultValue={editKey < 0 ? '' : data[editKey].title}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Video</FormLabel>
                <InputFile name="video">Change video</InputFile>
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter mt={8}>
            <Button variant="ghost" mr={4} onClick={onCloseEdit}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AdminLayout>
  );
};

export default Items;
