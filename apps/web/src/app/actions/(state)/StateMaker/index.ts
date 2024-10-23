"use server";

import { statemanager } from "../../../../utils/DB/db";

export async function StateMakerAction(roomId: string, state: string) {
  if (!statemanager[roomId]) {
    if (state === "team") {
      statemanager[roomId] = { state };
      return { message: "Room created", state };
    } else {
      throw new Error("Invalid state for room creation");
    }
  } else {
    return {
      message: "Room already exists",
      state: statemanager[roomId].state,
    };
  }
}
