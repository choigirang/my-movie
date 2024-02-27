import { api } from "@/api/api";
import { MovieDetailType } from "@/type/movie";
import React from "react";
import { useInfiniteQuery } from "react-query";

export default function useMovieData(keyword?: string | number) {
  async function fetchMovies({ pageParam = 1 }: { pageParam?: number }) {
    const res = await api.get(
      `${keyword !== "" ? "search/movie" : "movie/popular"}`,
      {
        params: {
          page: pageParam,
        },
      }
    );
    return res.data.results;
  }

  return useInfiniteQuery("movies", fetchMovies, {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
}
