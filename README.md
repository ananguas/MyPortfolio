Installation Instructions for MyPortfolio
Prerequisites
Before setting up the project, ensure you have the following installed on your system:

Node.js (Recommended LTS version)
MariaDB (For database management)
Git (For cloning the repository)

1. Clone the Repository
Open a terminal and run:
git clone https://github.com/ananguas/MyPortfolio.git
cd MyPortfolio

2. Install Dependencies
Run the following command to install all required Node.js dependencies:
npm install

3. Set Up the Database
Open MariaDB and create a database:
CREATE DATABASE myportfolio;

Update your .env file with the correct database credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=myportfolio
Run database migrations or import the necessary tables if required.

4. Run the Backend Server
Start the backend server using:
node backend/server.js
This will run the API on http://localhost:3000.

5. Run the Frontend
Simply open index.html in a browser or use a local development server:
npm install -g live-server  
live-server
This will open your project in a browser.

6. Testing the Setup
Open http://localhost:3000/api/status to verify the backend is running.
Open http://127.0.0.1:5500/index.html (if using Live Server) to check the frontend.

8. Deployment (Optional)
For deploying the project, you can use services like:
Frontend: GitHub Pages, Netlify, Vercel
Backend: Heroku, Render, or a cloud server
