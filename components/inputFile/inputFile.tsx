import { Button, Input, InputProps, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';

const InputFile: React.FC<InputProps> = ({ children, ...props }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.currentTarget?.files[0]?.name || '');
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const propsUpdated = {
    ...props,
    onChange: handleChange,
  };

  return (
    <>
      <Button
        leftIcon={<IoMdCloudUpload />}
        onClick={() => inputFileRef.current.click()}
      >
        {children}
      </Button>
      {fileName && (
        <Text mt={2} color="gray.500">
          {fileName}
        </Text>
      )}
      <Input
        type="file"
        display="none"
        ref={inputFileRef}
        onChange={handleChange}
        {...propsUpdated}
      />
    </>
  );
};

export default InputFile;
