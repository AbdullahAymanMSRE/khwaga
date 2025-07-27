"use client";

import { PaginationResult } from "@/lib/pagination";
import { useInfiniteQuery } from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useSearchParams } from "next/navigation";
import getCarPosts from "@/actions/carPosts";
import CarPost from "./CarPost";

export type CarPost = Awaited<ReturnType<typeof getCarPosts>>["data"][number];

interface CarPostsListProps {
  initialData?: PaginationResult<CarPost>;
}

const limit = 5;

export default function CarPostsList({ initialData }: CarPostsListProps) {
  const searchParams = useSearchParams();

  // Convert search params to object for API call
  const extraQueryParams: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    extraQueryParams[key] = value;
  });

  const {
    isLoading,
    data: queryData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["car-posts", extraQueryParams],
    queryFn: async ({
      pageParam,
    }: {
      pageParam: number;
    }): ReturnType<typeof getCarPosts> => {
      return getCarPosts({
        skip: pageParam,
        take: limit,
        ...extraQueryParams,
      });
    },
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasNextPage
        ? lastPage.pagination.currentPage * lastPage.pagination.limit
        : undefined;
    },
    initialPageParam: 0,
    initialData: initialData
      ? {
          pages: [initialData],
          pageParams: [0],
        }
      : undefined,
  });

  const { data, lastElementRef } = useInfiniteScroll({
    queryData,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage: Boolean(hasNextPage),
  });

  if (isLoading && !data?.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-300 rounded-lg h-48 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No cars found
        </h3>
        <p className="text-gray-500">Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((carPost) => (
          <CarPost key={carPost.id} carPost={carPost} ref={lastElementRef} />
        ))}
      </div>

      {isFetching && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}
