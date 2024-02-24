import { api } from "@/api/api";
import { MovieDetailType } from "@/type/movie";
import React from "react";
import { useQuery } from "react-query";

export default function useMovieData({
  page,
  keywords,
}: {
  page?: number;
  keywords?: string;
}) {
  async function fetchMove() {
    const res: MovieDetailType[] = (await api.get(``)).data.results;
    return res;
  }

  return useQuery(["movie"], fetchMove, {
    staleTime: 2000,
  });
}
