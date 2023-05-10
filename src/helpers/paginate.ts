import type { InfiniteData } from '@tanstack/react-query';

export interface Paginated<T> {
  copyright: string;
  num_results: number;
  results: T;
}

export function dataFromPaginated<T>(
  paginationData?: InfiniteData<void | Paginated<T>> | undefined
): T[] | null {
  if (!paginationData) return null;
  return paginationData.pages.reduce(
    // @ts-ignore
    (acc, group) => [...acc, ...group.results],
    [] as T[]
  );
}
