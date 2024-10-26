import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import setupSocket from './Socket/teamSocket'; // Import socket setup

const app = express();
const server = http.createServer(app);

// Health check route
app.get('/health', (req, res) => {
  res.send('working');
});

// Setup Socket.IO
setupSocket(server);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
