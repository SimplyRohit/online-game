// src/actions/(team)/TeamAction.ts
"use server";
import { cookies } from "next/headers";
import prisma from "db";

export async function TeamAction(
  roomId: string,
  teamName: "teamRed" | "teamBlue"
) {
  const cookieStore = cookies();
  const id = cookieStore.get("id")?.value;
  const name = cookieStore.get("name")?.value;

  if (!id || !name) {
    throw new Error("Player ID or name not found in cookies.");
  }

  const existingRoom = await prisma.room.findUnique({
    where: { id: roomId },
    include: { players: true },
  });

  if (!existingRoom) {
    return { message: `Room with ID ${roomId} does not exist.` };
  }

  const existingPlayer = existingRoom.players.find(
    (player) => player.id === id
  );

  if (existingPlayer) {
    if (existingPlayer.teamName === teamName) {
      return {
        message: `${name} is already in ${teamName}`,
      };
    } else {
      await prisma.player.update({
        where: { id },
        data: { teamName },
      });
      return {
        message: `${name} joined ${teamName} in room ${roomId}`,
      };
    }
  }
  await prisma.player.create({
    data: {
      id,
      name,
      teamName,
      roomId: roomId,
    },
  });

  return {
    message: `${name} joined ${teamName} in room ${roomId}`,
  };
}
