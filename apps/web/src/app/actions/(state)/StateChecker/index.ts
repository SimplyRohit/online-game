"use server";
import prisma from "db";

export async function StateCheckerAction(roomId: string) {
  const existingRoom = await prisma.room.findUnique({
    where: { id: roomId },
  });
  if (!existingRoom) {
    return {
      message: "Room does not exist",
    };
  } else {
    return {
      state: existingRoom.state,
    };
  }
}
