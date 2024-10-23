// src/actions/(team)/TeamAction.ts
"use server";
import { rooms } from "../../../../utils/DB/db";

export async function SyncDataAction(roomId: string) {
  return rooms[roomId];
}
