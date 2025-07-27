"use server";

import prisma from "@/lib/prisma";
import { createPaginatedResponse } from "@/lib/pagination";

// Get all car body types with pagination
export async function getCarBodyTypes({
  skip = 0,
  take = 10,
}: {
  skip?: number;
  take?: number;
} = {}) {
  // Execute both queries in parallel for better performance
  const [carBodyTypes, totalCount] = await Promise.all([
    prisma.carBodyType.findMany({
      skip,
      take,
      orderBy: {
        name: "asc",
      },
    }),
    prisma.carBodyType.count(),
  ]);

  const page = Math.floor(skip / take) + 1;
  return createPaginatedResponse(carBodyTypes, totalCount, page, take);
}

// Get a specific car body type by slug
export async function getCarBodyTypeBySlug(slug: string) {
  const carBodyType = await prisma.carBodyType.findUnique({
    where: { slug },
  });
  return carBodyType;
}
