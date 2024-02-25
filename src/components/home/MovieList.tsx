import useMovieData from "@/hook/useMovieData";
import { Container, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import MovieInfo from "./MovieInfo";
import { MovieDetailType } from "@/type/movie";

export default function MovieList() {
  const target = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovieData();

  useEffect(() => {
    if (target.current && !hasNextPage) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target.current, data?.pageParams]);

  return (
    <Grid container spacing={4}>
      {data &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((movie: MovieDetailType) => (
              <MovieInfo key={movie.id} {...movie} />
            ))}
          </React.Fragment>
        ))}
      {isFetchingNextPage && <div>Loading...</div>}
      {!hasNextPage && <div>End of List</div>}
      <div ref={target} />
    </Grid>
  );
}
