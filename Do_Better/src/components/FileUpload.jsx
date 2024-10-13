import React, { useState } from 'react';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import s3Client from '../utils/awsConfig';

const FileUpload = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');  // For showing success message

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadMessage('Please select a file first.');
      return;
    }

    const params = {
      Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
      Key: file.name,
      Body: file,
    };

    try {
      await s3Client.send(new PutObjectCommand(params));
      console.log('File uploaded successfully');
      onUploadComplete(file.name); 
      setUploadMessage(`File "${file.name}" uploaded successfully!`);

      // Clear file input after successful upload
      setFile(null);
      document.getElementById('file-input').value = '';  // Reset input element
    } catch (err) {
      console.error('Error uploading file:', err);
      setUploadMessage('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="file-upload">
      <input 
        id="file-input" 
        type="file" 
        accept="image/*"  // Only accept image formats like .jpg, .png, etc.
        onChange={handleFileChange} 
      />
      <button onClick={handleUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>} {/* Display success or error message */}
    </div>
  );
};

export default FileUpload;
