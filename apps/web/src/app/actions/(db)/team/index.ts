"use server";
import prisma from "db";

export async function TeamAction(
  roomId: string,
  teamName: "teamRed" | "teamBlue",
  playerid: string,
  playername: string
) {
  const existingRoom = await prisma.room.findUnique({
    where: { id: roomId },
    include: { players: true },
  });

  if (!existingRoom) {
    return { status: 400 };
  }

  const existingPlayer = existingRoom.players.find(
    (player) => player.playerid === playerid
  );

  if (existingPlayer) {
    if (existingPlayer.teamName === teamName) {
      return { status: 201 };
    } else {
      await prisma.player.update({
        where: { id: existingPlayer.id },
        data: { teamName },
      });
      return { status: 202 };
    }
  }

  await prisma.player.create({
    data: {
      playerid,
      name: playername,
      teamName,
      roomId,
    },
  });

  return { status: 200 };
}
