"use client";

// MovieMore.js
import React, { useState } from "react";
import { api } from "../api/api";
import MovieInfo from "./movieInfo";
import { MovieDetailType } from "@/type/movie";

export default function MoreMovie() {
  const [page, setPage] = useState(2);
  const [movies, setMovies] = useState<MovieDetailType[] | []>([]);

  async function loadMoreMovies() {
    const res = await api.get("movie/popular", { params: { page } });
    setMovies((prev) => [...prev, ...res.data.results]);
    setPage((prev) => prev + 1);
  }

  return (
    <React.Fragment>
      {movies.map((movie) => (
        <MovieInfo key={movie.id} {...movie} />
      ))}
      <li className="mb-9 col-span-4 sm:col-span-1 md:col-span-3">
        <button
          onClick={loadMoreMovies}
          className="px-6 py-2 text-xs bg-yellow-300 text-black rounded-lg transition-custom hover:scale-110"
        >
          더 보기
        </button>
      </li>
    </React.Fragment>
  );
}
