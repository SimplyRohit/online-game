"use server";
import { statemanager } from "../../../../utils/DB/db";

export async function StateCheckerAction(roomId: string) {
  if (statemanager[roomId]) {
    return {
      message: "Room exist",
      state: statemanager[roomId].state,
    };
  } else {
    return { message: "Room does not exist" };
  }
}
