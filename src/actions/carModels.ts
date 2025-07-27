"use server";

import prisma from "@/lib/prisma";
import { createPaginatedResponse } from "@/lib/pagination";

// Get all car models with pagination and optional make filter
export async function getCarModels({
  make = "",
  skip = 0,
  take = 10,
}: {
  make?: string;
  skip?: number;
  take?: number;
} = {}) {
  // Execute both queries in parallel for better performance
  const [carModels, totalCount] = await Promise.all([
    prisma.carModel.findMany({
      where: {
        carMake: {
          slug: make || undefined,
        },
      },
      skip,
      take,
      orderBy: {
        name: "asc",
      },
    }),
    prisma.carModel.count({
      where: {
        carMake: {
          slug: make || undefined,
        },
      },
    }),
  ]);

  const page = Math.floor(skip / take) + 1;
  return createPaginatedResponse(carModels, totalCount, page, take);
}

// Get a specific car model by slug
export async function getCarModelBySlug(slug: string) {
  const carModel = await prisma.carModel.findUnique({
    where: { slug },
  });
  return carModel;
}
