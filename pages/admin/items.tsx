import {
  useDisclosure,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
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
  VStack,
} from '@chakra-ui/react';
import {
  createItem,
  deleteItem,
  updateItem,
  useItems,
  CreateItemParams,
  UpdateItemParams,
} from 'api/items';
import InputFile from 'components/inputFile';
import VideoPreview from 'components/videoPreview';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdAdd } from 'react-icons/io';
import { RiDeleteBin2Fill, RiPencilFill } from 'react-icons/ri';

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
  const [video, setVideo] = useState<File>();
  const [thumbnail, setThumbnail] = useState<File>();
  const { data, refetch } = useItems();
  const { register, errors, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpenEdit) {
      setEditKey(-1);
    }
  }, [isOpenEdit]);

  const resetForm = () => {
    setEditKey(-1);
    reset();
    setVideo(undefined);
    setThumbnail(undefined);
    onCloseEdit();
    onCloseDelete();
    setIsSubmitting(false);
  };

  const onCreate = (createParams: CreateItemParams) => {
    setIsSubmitting(true);
    createItem({
      title: createParams.title,
      thumbnail,
      video,
    }).then(() => {
      resetForm();
      refetch();
    });
  };

  const onUpdate = (updateParams: UpdateItemParams) => {
    setIsSubmitting(true);
    updateItem({
      id: data[editKey].id,
      title: updateParams.title,
      thumbnail,
      video,
    }).then(() => {
      resetForm();
      refetch();
    });
  };

  const onDelete = () => {
    deleteItem(data[editKey].id).then(() => {
      resetForm();
      refetch();
    });
  };

  const handleChangeVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideo(e.currentTarget.files[0]);
  };

  const handleChangeThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThumbnail(e.currentTarget.files[0]);
  };

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
        {data?.map((item, key) => (
          <Box pb={4} pos="relative" key={key}>
            {item.thumbnail ? (
              <Box
                w="100%"
                h="200px"
                borderRadius="lg"
                bgImage={`url(${item.thumbnail})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
              />
            ) : (
              <VideoPreview url={item.video} width="100%" height="200px" />
            )}
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
                onClick={() => {
                  onOpenDelete();
                  setEditKey(key);
                }}
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
            <Button colorScheme="red" onClick={onDelete}>
              Yes, sure
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
        <form onSubmit={handleSubmit(editKey < 0 ? onCreate : onUpdate)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {editKey < 0 ? 'Create new' : 'Edit'} item
            </ModalHeader>
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isInvalid={errors.title} isDisabled={isSubmitting}>
                  <FormLabel>Title</FormLabel>
                  <Input
                    name="title"
                    placeholder="Title"
                    defaultValue={editKey < 0 ? '' : data[editKey].title}
                    ref={register({
                      required: 'Title is required',
                    })}
                  />
                  <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Thumbnail</FormLabel>
                  <InputFile
                    name="thumbnail"
                    accept=".jpg, .png, .jpeg"
                    onChange={handleChangeThumbnail}
                    isDisabled={isSubmitting}
                  >
                    Change thumbnail
                  </InputFile>
                </FormControl>
                <FormControl>
                  <FormLabel>Video</FormLabel>
                  <InputFile
                    name="video"
                    accept=".mp4"
                    onChange={handleChangeVideo}
                    isDisabled={isSubmitting}
                  >
                    Change video
                  </InputFile>
                  <FormErrorMessage>{errors.video?.message}</FormErrorMessage>
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter mt={8}>
              <Button
                variant="ghost"
                mr={4}
                onClick={onCloseEdit}
                isDisabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                type="submit"
                isDisabled={isSubmitting}
              >
                {editKey < 0 ? 'Create new item' : 'Save update'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </AdminLayout>
  );
};

export default Items;
