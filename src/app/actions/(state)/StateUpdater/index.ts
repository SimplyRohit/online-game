"use server";
import { statemanager } from "@/utils/DB/db";

export async function StateUpdaterAction(roomId: string, newstate: string) {
  const room = statemanager[roomId];

  if (!room) {
    return { message: "Room does not exist" };
  }

  const validTransitions: { [key: string]: string } = {
    team: "playing",
    playing: "result",
  };

  if (validTransitions[room.state] === newstate) {
    room.state = newstate;
    return { message: "Room updated" };
  } else {
    return { message: "Invalid state for room update" };
  }
}
