import { Server, Socket } from 'socket.io';
import { Server as HTTPServer } from 'http';
// import prisma from '../../../../packages/db/src/index';
export function TeamSocket(httpServer: HTTPServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket: Socket) => {
    console.log('New client connected:', socket.id);

    socket.on('message', (data) => {
      console.log('Message received:', data);
      socket.emit('response', { message: 'Message received!' });
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });

  console.log('Socket.IO initialized');
}
