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
      <li className="col-span-4 sm:col-span-1 md:col-span-3">
        <button
          onClick={loadMoreMovies}
          className="px-8 py-3 bg-yellow-300 text-black rounded-lg"
        >
          더 보기
        </button>
      </li>
    </React.Fragment>
  );
}
