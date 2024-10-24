"use server";
import prisma from "db";

export async function StateMakerAction(roomId: string, state: string) {
  const existingRoom = await prisma.room.findUnique({
    where: { id: roomId },
    include: { players: true },
  });
  if (!existingRoom) {
    if (state === "team") {
      await prisma.room.create({
        data: {
          id: roomId,
          state,
          players: {
            create: [],
          },
        },
      });

      return { message: "Room created" };
    } else {
      throw new Error("Invalid state for room creation");
    }
  } else {
    return {
      message: "Room already exists",
    };
  }
}
