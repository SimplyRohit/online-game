-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "playerid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
