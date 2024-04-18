import { Grid } from "@mui/material";
import { api } from "../../api/api";
import { MovieDetailType } from "@/type/movie";
import React from "react";
import MovieInfo from "./movieInfo";

async function getMovie() {
  const res = await api.get("movie/popular", { params: 1 });
  return res.data;
}

export default async function MovieList() {
  const movies = await getMovie();

  return (
    <Grid container spacing={4}>
      {movies.results.map((movie: MovieDetailType) => (
        <MovieInfo {...movie} key={movie.id} />
      ))}
    </Grid>
  );
}
