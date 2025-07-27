"use server";

import prisma from "@/lib/prisma";
import { createPaginatedResponse } from "@/lib/pagination";

// Get all car fuel types with pagination
export async function getCarFuelTypes({
  skip = 0,
  take = 10,
}: {
  skip?: number;
  take?: number;
} = {}) {
  // Execute both queries in parallel for better performance
  const [carFuelTypes, totalCount] = await Promise.all([
    prisma.carFuelType.findMany({
      skip,
      take,
      orderBy: {
        name: "asc",
      },
    }),
    prisma.carFuelType.count(),
  ]);

  const page = Math.floor(skip / take) + 1;
  return createPaginatedResponse(carFuelTypes, totalCount, page, take);
}

// Get a specific car fuel type by slug
export async function getCarFuelTypeBySlug(slug: string) {
  const carFuelType = await prisma.carFuelType.findUnique({
    where: { slug },
  });
  return carFuelType;
}
