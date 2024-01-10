/*
  Warnings:

  - The primary key for the `Categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the column `category_name` on the `Categories` table. All the data in the column will be lost.
  - The primary key for the `Tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag_id` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the column `tag_name` on the `Tags` table. All the data in the column will be lost.
  - Added the required column `id` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Tags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "_PostToTags" DROP CONSTRAINT "_PostToTags_B_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_pkey",
DROP COLUMN "category_id",
DROP COLUMN "category_name",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_pkey",
DROP COLUMN "tag_id",
DROP COLUMN "tag_name",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Tags_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTags" ADD CONSTRAINT "_PostToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
