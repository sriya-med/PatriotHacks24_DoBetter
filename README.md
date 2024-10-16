# PatriotHacks24_DoBetter
Do Better is a web application aimed at promoting eco-friendly behaviors by rewarding users for completing environmentally conscious tasks. Users can upload images as proof of their activities, which are then analyzed using Amazon Rekognition to detect key eco-friendly elements, such as recycling symbols and plastic waste.

Features
- Image Upload: Users can upload images of their eco-friendly actions, which are securely stored in an AWS S3 bucket.
- Image Analysis: Utilizes Amazon Rekognition to analyze uploaded images for environmental elements like plastic waste or recycling symbols.
- Achievements & Points: Users are awarded points for completing tasks and can track their progress via a leaderboard.
- Responsive UI: A clean and interactive interface built using React and Vite, with custom CSS for responsiveness.

Technology Stack
- Frontend: React, Vite, JavaScript, CSS, HTML
- Backend: AWS SDK, AWS S3, Amazon Rekognition
- Cloud Services: AWS S3 (file storage), Amazon Rekognition (image analysis)
- Environment Management: dotenv for managing environment variables

Setup Instructions
1. Prerequisites

- Node.js and npm installed
- AWS Account with S3 bucket and Rekognition permissions
- AWS Access Key ID and Secret Access Key

Installation
- Clone the repository
- git clone https://github.com/your-username/do-better.git
- cd do-better
Install dependencies:
- npm install
Set Up Environmental Variables:
- touch .env
VITE_AWS_ACCESS_KEY_ID=your-access-key-id
VITE_AWS_SECRET_ACCESS_KEY=your-secret-access-key
VITE_AWS_REGION=your_region
VITE_AWS_BUCKET_NAME=your-bucket-name
Run the App:
- npm run dev

Future Implementation: 
- Implement user registration, login, and authentication to create personalized user accounts.
- Introduce a global leaderboard where users can see how they rank against others globally.
- Allow users to share their achievements and completed tasks on social media platforms like Twitter, Instagram, and Facebook.
- Expand the image recognition feature to detect more eco-friendly actions, such as composting, reusable shopping bags, carpooling, or solar panels.



