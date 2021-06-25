/*
  Warnings:

  - You are about to drop the column `genere` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genere",
ADD COLUMN     "genre" TEXT;
