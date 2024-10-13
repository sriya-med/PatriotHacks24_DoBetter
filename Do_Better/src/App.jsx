import React from 'react';
import FileUpload from './components/FileUpload';  // Import your FileUpload component
import './App.css';

const App = () => {
  return (
    <div className="App">
      <link rel="stylesheet" href="/src/index.css" />
      <header id="header">
        <h1 style={{ fontSize: '40px' }}>Do Better</h1>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="left-table">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>Achievements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete 5 eco-friendly tasks <span id="achieveID">50 points</span></td>
                </tr>
                <tr>
                  <td>Help others with recycling <span id="achieveID">30 points</span></td>
                </tr>
                <tr>
                  <td>Join a local clean-up team <span id="achieveID">40 points</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="point-system">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>Points Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Use a friendly straw <span id="pointsID">20 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
                <tr>
                  <td>Recycle a plastic bottle <span id="pointsID">15 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
                <tr>
                  <td>Walk or bike instead of driving <span id="pointsID">25 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
                <tr>
                  <td>Pick up litter in your neighborhood <span id="pointsID">30 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
              </tbody>
            </table>

            {/* Replace static file upload form with the React component */}
            <div className="upload-box">
              <FileUpload onUploadComplete={(fileName) => console.log(fileName + ' uploaded')} />
            </div>
          </div>

          <div className="leader-board">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>LeaderBoard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sriya <span id="pointsID">999 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
                <tr>
                  <td>Hayder <span id="pointsID">15 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
                <tr>
                  <td>Sadhana <span id="pointsID">25 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
                <tr>
                  <td>Keerthana <span id="pointsID">30 <img id="rewardPic" src="pictures/rewardPic.png" alt="reward" /></span></td>
                </tr>
              </tbody>
            </table>
          </div>
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
