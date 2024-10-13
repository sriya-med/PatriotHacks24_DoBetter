import React, { useState } from 'react';
import FileUpload from './components/FileUpload';  
import AnalyzeImage from './components/AnalyzeImage';  
import './App.css'; 

const App = () => {
  const [uploadedFileName, setUploadedFileName] = useState('');  // State to hold uploaded file name

  // This function will be called when file upload is complete
  const handleUploadComplete = (fileName) => {
    setUploadedFileName(fileName);
  };

  return (
    <div className="App">
      <header id="header">
        Do Better
      </header>

      <main className="main-content">
        <div className="left-table">
          <table>
            <thead>
              <tr><th>Achievements</th></tr>
            </thead>
            <tbody>
              <tr><td>Complete 5 eco-friendly tasks <span id="achieveID">50 points</span></td></tr>
              <tr><td>Help others with recycling <span id="achieveID">30 points</span></td></tr>
              <tr><td>Join a local clean-up team <span id="achieveID">40 points</span></td></tr>
            </tbody>
          </table>
        </div>

        <div className="point-system">
          <table>
            <thead>
              <tr><th>Points Requirements</th></tr>
            </thead>
            <tbody>
              <tr><td>Use a friendly straw <span id="pointsID">20</span></td></tr>
              <tr><td>Recycle a plastic bottle <span id="pointsID">15</span></td></tr>
              <tr><td>Walk or bike instead of driving <span id="pointsID">25</span></td></tr>
              <tr><td>Pick up litter in your neighborhood <span id="pointsID">30</span></td></tr>
            </tbody>
          </table>

          <div className="upload-box">
            <FileUpload onUploadComplete={handleUploadComplete} /> {/* Pass the callback function */}
          </div>

          {/* Conditionally render AnalyzeImage if a file is uploaded */}
          {uploadedFileName && (
            <div className="analyze-section">
              <AnalyzeImage imageName={uploadedFileName} />
            </div>
          )}
        </div>

        <div className="leader-board">
          <table>
            <thead>
              <tr><th>LeaderBoard</th></tr>
            </thead>
            <tbody>
              <tr><td>Sriya <span id="pointsID">999</span></td></tr>
              <tr><td>Hayder <span id="pointsID">15</span></td></tr>
              <tr><td>Sadhana <span id="pointsID">25</span></td></tr>
              <tr><td>Keerthana <span id="pointsID">30</span></td></tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <p>Privacy Policy | Terms and Conditions</p>
        <p>&copy; DO BETTER</p>
      </footer>
    </div>
  );
};

export default App;
