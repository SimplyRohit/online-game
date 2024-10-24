"use server";

import prisma from "@/lib/prisma";

export async function StateUpdaterAction(roomId: string, newstate: string) {
  await prisma.room.update({
    where: { id: roomId },
    data: {
      state: newstate,
    },
  });

  return { message: "Room updated" };
}
