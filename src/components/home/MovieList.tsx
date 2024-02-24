import useMovieData from "@/hook/useMovieData";
import { Container, Grid } from "@mui/material";
import React from "react";
import MovieInfo from "./MovieInfo";
import { MovieDetailType } from "@/type/movie";

export default function MovieList() {
  const { data } = useMovieData({ page: undefined });

  return (
    <Grid container spacing={4}>
      {data && data.map((each) => <MovieInfo key={each.id} {...each} />)}
    </Grid>
  );
}
