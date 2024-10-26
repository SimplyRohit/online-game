import { Server } from 'socket.io';
import prisma from '../libs/prisma';
import dotenv from 'dotenv';
dotenv.config();

export default function setupSocket(server: any) {
  const io = new Server(server, {
    cors: {
      origin: process.env.SOCKET_URL,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('join-room', async (roomId) => {
      try {
        socket.join(roomId);
        console.log(`Socket ${socket.id} joined room ${roomId}`);

        const room = await prisma.room.findUnique({
          where: { id: roomId },
          include: { players: true },
        });

        if (room) {
          io.to(roomId).emit('update-players', room.players);
        } else {
          console.log(`Room ${roomId} not found.`);
        }
      } catch (error) {
        console.error(`Error joining room ${roomId}:`, error);
      }
    });

    socket.on('join-team', async (roomID) => {
      try {
        const room = await prisma.room.findUnique({
          where: { id: roomID as string },
          include: { players: true },
        });

        io.to(roomID).emit('update-players', room?.players);
      } catch (error) {
        console.error('Error handling join-team:', error);
        socket.emit('error', 'An error occurred while joining the team.');
      }
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });

  return io;
}
