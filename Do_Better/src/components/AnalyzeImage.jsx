// src/components/AnalyzeImage.jsx
import React, { useEffect, useState } from 'react';
import { RekognitionClient, DetectLabelsCommand } from '@aws-sdk/client-rekognition';

const AnalyzeImage = ({ imageName }) => {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const analyzeImage = async () => {
      const rekognitionClient = new RekognitionClient({
        region: import.meta.env.VITE_AWS_REGION,
        credentials: {
          accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
          secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
        },
      });

      const params = {
        Image: {
          S3Object: {
            Bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
            Name: imageName,
          },
        },
        MaxLabels: 10,
        MinConfidence: 75,
      };

      try {
        const command = new DetectLabelsCommand(params);
        const response = await rekognitionClient.send(command);
        setLabels(response.Labels);
      } catch (err) {
        console.error('Error analyzing image:', err);
      }
    };

    if (imageName) {
      analyzeImage();
    }
  }, [imageName]);

  return (
    <div>
      <h2>Detected Labels:</h2>
      <ul>
        {labels.map((label) => (
          <li key={label.Name}>{label.Name} - {label.Confidence.toFixed(2)}%</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyzeImage;
