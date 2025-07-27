import { PaginationResult } from "@/lib/pagination";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";

export default function useInfiniteScroll<
  T,
  X extends HTMLElement = HTMLDivElement
>({
  queryData,
  isLoading,
  isFetching,
  fetchNextPage,
  hasNextPage,
}: {
  queryData: InfiniteData<PaginationResult<T>, unknown> | undefined;
  isLoading: boolean;
  isFetching: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<PaginationResult<T>, unknown>,
      Error
    >
  >;
  hasNextPage: boolean;
}) {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: X) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  const data = useMemo(() => {
    return queryData?.pages
      .map((p) => p.data)
      .reduce((acc, page) => {
        return [...acc, ...page];
      }, []);
  }, [queryData]);

  return { data, lastElementRef };
}
