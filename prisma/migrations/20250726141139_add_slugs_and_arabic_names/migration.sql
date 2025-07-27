/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `CarBodyType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `CarFuelType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `CarMake` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `CarModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `CarTransmission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `CarBodyType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `CarFuelType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `CarMake` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `CarModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `CarTransmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarBodyType" ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarFuelType" ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarMake" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarModel" ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CarTransmission" ADD COLUMN     "nameAr" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CarBodyType_slug_key" ON "CarBodyType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarFuelType_slug_key" ON "CarFuelType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarMake_slug_key" ON "CarMake"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarModel_slug_key" ON "CarModel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CarTransmission_slug_key" ON "CarTransmission"("slug");
