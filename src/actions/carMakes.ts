"use server";

import prisma from "@/lib/prisma";
import { createPaginatedResponse } from "@/lib/pagination";

// Get all car makes with pagination
export async function getCarMakes({
  skip = 0,
  take = 10,
}: {
  skip?: number;
  take?: number;
} = {}) {
  // Execute both queries in parallel for better performance
  const [carMakes, totalCount] = await Promise.all([
    prisma.carMake.findMany({
      skip,
      take,
      orderBy: {
        name: "asc",
      },
    }),
    prisma.carMake.count(),
  ]);

  const page = Math.floor(skip / take) + 1;
  return createPaginatedResponse(carMakes, totalCount, page, take);
}

// Get a specific car make by slug
export async function getCarMakeBySlug(slug: string) {
  const carMake = await prisma.carMake.findUnique({
    where: { slug },
  });
  return carMake;
}
