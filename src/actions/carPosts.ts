"use server";

import prisma from "@/lib/prisma";
import { createPaginatedResponse } from "@/lib/pagination";

export default async function getCarPosts({
  q = "",
  make = "",
  model = "",
  bodyType = "",
  fuelType = "",
  transmission = "",
  skip = 0,
  take = 10,
}: {
  q?: string;
  make?: string;
  model?: string;
  bodyType?: string;
  fuelType?: string;
  transmission?: string;
  skip?: number;
  take?: number;
} = {}) {
  const whereClause = {
    AND: [
      // Search functionality - only if q has a value
      ...(q
        ? [
            {
              OR: [
                {
                  carModel: {
                    OR: [
                      {
                        carMake: {
                          name: { contains: q, mode: "insensitive" as const },
                        },
                      },
                      { carMake: { nameAr: { contains: q } } },
                      { name: { contains: q, mode: "insensitive" as const } },
                      { nameAr: { contains: q } },
                    ],
                  },
                },
                {
                  carBodyType: {
                    OR: [
                      { name: { contains: q, mode: "insensitive" as const } },
                      { nameAr: { contains: q } },
                    ],
                  },
                },
                {
                  carFuelType: {
                    OR: [
                      { name: { contains: q, mode: "insensitive" as const } },
                      { nameAr: { contains: q } },
                    ],
                  },
                },
                {
                  carTransmission: {
                    OR: [
                      { name: { contains: q, mode: "insensitive" as const } },
                      { nameAr: { contains: q } },
                    ],
                  },
                },
                {
                  title: { contains: q, mode: "insensitive" as const },
                },
                {
                  description: { contains: q, mode: "insensitive" as const },
                },
              ],
            },
          ]
        : []),
      // Filter by make - only if make has a value
      ...(make
        ? [
            {
              carModel: {
                carMake: {
                  slug: make,
                },
              },
            },
          ]
        : []),
      // Filter by model - only if model has a value
      ...(model
        ? [
            {
              carModel: {
                slug: model,
              },
            },
          ]
        : []),
      // Filter by body type - only if bodyType has a value
      ...(bodyType
        ? [
            {
              carBodyType: {
                slug: bodyType,
              },
            },
          ]
        : []),
      // Filter by fuel type - only if fuelType has a value
      ...(fuelType
        ? [
            {
              carFuelType: {
                slug: fuelType,
              },
            },
          ]
        : []),
      // Filter by transmission - only if transmission has a value
      ...(transmission
        ? [
            {
              carTransmission: {
                slug: transmission,
              },
            },
          ]
        : []),
    ],
  };

  // Execute both queries in parallel for better performance
  const [carPosts, totalCount] = await Promise.all([
    prisma.carPost.findMany({
      where: whereClause,
      include: {
        carModel: {
          include: {
            carMake: true,
          },
        },
        carBodyType: true,
        carFuelType: true,
        carTransmission: true,
        carPostImages: {
          where: {
            isMain: true,
          },
          take: 1,
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take,
    }),
    prisma.carPost.count({
      where: whereClause,
    }),
  ]);

  const page = Math.floor(skip / take) + 1;

  return createPaginatedResponse(carPosts, totalCount, page, take);
}
