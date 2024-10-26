/*
  Warnings:

  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_roomId_fkey";

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
