import React, { useState } from "react";
import { api } from "@/api/api";

import { useInfiniteQuery } from "react-query";
import { MovieDetailType } from "@/type/movie";

/**
 * api data의 page에 따른 useInfiniteQuery
 * @returns 무한 스크롤
 */
export default function useMovieData(keyword?: string | number) {
  const [totalPage, setTotalPage] = useState<number>(1);

  async function fetchMovies({ pageParam = 1 }: { pageParam?: number }) {
    let queryParams: any = { page: pageParam };
    if (keyword) queryParams.query = keyword;

    const res = await api.get(`${keyword ? "search/movie" : "movie/popular"}`, {
      params: queryParams,
    });

    setTotalPage(res.data.total_pages);
    return res.data.results;
  }

  function resultPage(
    lastPage: Array<MovieDetailType[] | undefined>,
    allPage: Array<Array<MovieDetailType[] | undefined>>
  ) {
    return lastPage.length === 20 && totalPage > allPage.length;
  }

  return useInfiniteQuery(["movies", keyword], fetchMovies, {
    enabled: keyword !== "",
    getNextPageParam: (lastPage, allPages) => {
      return resultPage(lastPage, allPages) ? allPages.length + 1 : null;
    },
  });
}
