// src/components/FileUpload.jsx
import React, { useState } from 'react';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import s3Client from '../utils/awsConfig';

const FileUpload = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const params = {
      Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
      Key: file.name,
      Body: file,
    };

    try {
      await s3Client.send(new PutObjectCommand(params));
      console.log('File uploaded successfully');
      onUploadComplete(file.name); // Call the analyze function after upload
    } catch (err) {
      console.error('Error uploading file:', err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
