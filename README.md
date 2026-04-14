🚀 Pair-Code (Real-Time Collaborative Editor)
A real-time collaborative coding editor that allows multiple developers to work together on the same codebase simultaneously. Built using CRDTs (Conflict-free Replicated Data Types) with Yjs, and powered by Monaco Editor (React) for a smooth coding experience.

✨ Features
🔄 Real-Time Collaboration – instant updates across all connected clients

🧩 Conflict-Free Editing – powered by Yjs CRDT for seamless merging

💻 Monaco Editor (React) – rich code editing with syntax highlighting

👥 Pair Programming Mode – two developers coding together in one file

☁️ Scalable Architecture – designed for collaborative applications

🛠️ Tech Stack
Yjs → CRDT framework for building collaborative apps

Monaco Editor (React) → code editor with syntax highlighting

React → frontend framework for interactive UI

Node.js / Express → backend for handling connections and persistence

Socket.IO → real-time communication between server and clients

📦 Installation & Dependencies
Before running the project, make sure you install the following packages:

bash
npm install yjs
npm install react-monaco-editor
npm install socket.io
npm install express
npm install react
If you are using a backend folder, run npm install inside both frontend and backend directories to install their respective dependencies.

📂 Project Structure
Code
/backend
  ├── node_modules/
  ├── .env
  ├── server.js
/frontend
  ├── src/
  ├── node_modules/
  ├── .env
🚀 Getting Started
Clone the repository

bash
git clone https://github.com/Pranav-Choudhary-35/Pair-Code.git
cd Pair-Code
Install dependencies

bash
npm install
Run the development server

bash
npm start
Open http://localhost:3000 in your browser and start collaborating!

🎯 Use Cases
Pair programming practice

Remote team collaboration

Hackathons and coding competitions

Building collaborative developer tools

📌 Roadmap
[ ] Add support for multiple programming languages

[ ] Implement user authentication

[ ] Add persistence layer for saving sessions

[ ] Real-time chat integration