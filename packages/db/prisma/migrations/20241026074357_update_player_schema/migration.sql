/*
  Warnings:

  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Player` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_roomId_fkey";

-- AlterTable
ALTER TABLE "Player" DROP CONSTRAINT "Player_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Player_pkey" PRIMARY KEY ("roomId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
