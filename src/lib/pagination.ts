import { NextRequest } from "next/server";

export interface PaginationParams {
  page?: number;
  limit?: number;
  maxLimit?: number;
}

export interface PaginationResult<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface PaginationOptions {
  page: number;
  limit: number;
  skip: number;
}

/**
 * Extracts and validates pagination parameters from request URL
 */
export function getPaginationParams(
  request: NextRequest,
  defaultLimit = 10,
  maxLimit = 100
): PaginationOptions {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(
    searchParams.get("limit") || defaultLimit.toString(),
    10
  );

  // Validate page and limit
  const validPage = Math.max(1, page);
  const validLimit = Math.min(Math.max(1, limit), maxLimit);

  // Calculate skip value for pagination
  const skip = (validPage - 1) * validLimit;

  return {
    page: validPage,
    limit: validLimit,
    skip,
  };
}

/**
 * Creates a paginated response with metadata
 */
export function createPaginatedResponse<T>(
  data: T[],
  totalCount: number,
  page: number,
  limit: number
): PaginationResult<T> {
  const totalPages = Math.ceil(totalCount / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return {
    data,
    pagination: {
      currentPage: page,
      totalPages,
      totalCount,
      limit,
      hasNextPage,
      hasPrevPage,
    },
  };
}

/**
 * Complete pagination helper that handles the entire flow
 */
export async function paginate<T>(
  request: NextRequest,
  queryFn: (skip: number, take: number) => Promise<T[]>,
  countFn: () => Promise<number>,
  defaultLimit = 10,
  maxLimit = 100
): Promise<PaginationResult<T>> {
  const { page, limit, skip } = getPaginationParams(
    request,
    defaultLimit,
    maxLimit
  );

  // Get total count and paginated data in parallel
  const [data, totalCount] = await Promise.all([
    queryFn(skip, limit),
    countFn(),
  ]);

  return createPaginatedResponse(data, totalCount, page, limit);
}
