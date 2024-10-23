// src/actions/(team)/TeamAction.ts
"use server";
import { cookies } from "next/headers";
import { rooms } from "../../../../utils/DB/db";

export async function TeamAction(
  roomId: string,
  teamName: "teamRed" | "teamBlue"
) {
  const cookieStore = cookies();
  const cookie = cookieStore.getAll();
  const name = cookie[0].value;
  const id = cookie[1].value;

  if (!rooms[roomId]) {
    rooms[roomId] = {
      teamRed: {
        players: [],
        points: 0,
      },
      teamBlue: {
        players: [],
        points: 0,
      },
    };
  }

  const team = rooms[roomId][teamName];
  if (!team) {
    throw new Error("Team does not exist");
  }
  if (!id || !name) {
    throw new Error("Player ID or name not found in cookies");
  }
  const playerExists = team.players.some((player) => player.id === id);
  if (!playerExists) {
    team.players.push({ id, name });
    return {
      message: `${name} joined ${teamName} in room ${roomId}`,
      room: rooms[roomId],
    };
  } else {
    return {
      message: `${name} is already in ${teamName}`,
      room: rooms[roomId],
    };
  }
}
