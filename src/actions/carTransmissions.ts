"use server";

import prisma from "@/lib/prisma";
import { createPaginatedResponse } from "@/lib/pagination";

// Get all car transmissions with pagination
export async function getCarTransmissions({
  skip = 0,
  take = 10,
}: {
  skip?: number;
  take?: number;
} = {}) {
  // Execute both queries in parallel for better performance
  const [carTransmissions, totalCount] = await Promise.all([
    prisma.carTransmission.findMany({
      skip,
      take,
      orderBy: {
        name: "asc",
      },
    }),
    prisma.carTransmission.count(),
  ]);

  const page = Math.floor(skip / take) + 1;
  return createPaginatedResponse(carTransmissions, totalCount, page, take);
}

// Get a specific car transmission by slug
export async function getCarTransmissionBySlug(slug: string) {
  const carTransmission = await prisma.carTransmission.findUnique({
    where: { slug },
  });
  return carTransmission;
}
