/*
  Warnings:

  - You are about to drop the column `name` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `BakeryProfile` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bakeryName` to the `BakeryProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "name",
ADD COLUMN     "fullname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "BakeryProfile" DROP COLUMN "name",
ADD COLUMN     "bakeryName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "name",
ADD COLUMN     "productName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "fullname" TEXT NOT NULL;
