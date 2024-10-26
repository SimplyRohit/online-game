"use server";
import prisma from "db";

export async function ResultAction(roomId: string) {
  const existingRoom = await prisma.room.findUnique({
    where: { id: roomId },
    include: { players: true },
  });
  return existingRoom?.players;
}
