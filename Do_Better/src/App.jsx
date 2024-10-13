import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './components/FileUpload'
import AnalyzeImage from './components/AnalyzeImage'




function App() {
  const [uploadedImageName, setUploadedImageName] = useState('');
  

  return (
    <div>
      <h1>Image Upload and Analysis</h1>
      <FileUpload onUploadComplete={setUploadedImageName} />
      {uploadedImageName && <AnalyzeImage imageName={uploadedImageName} />}
    </div>
  )
}

export default App
