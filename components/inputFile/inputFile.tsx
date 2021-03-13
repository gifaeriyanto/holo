import { Button, Input, InputProps, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';

const InputFile: React.FC<InputProps> = ({ children, ...props }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');

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
        ref={inputFileRef}
        display="none"
        onChange={(e) => setFileName(e.currentTarget?.files[0]?.name || '')}
        accept=".mp4"
        {...props}
      />
    </>
  );
};

export default InputFile;
