import React, { useEffect, useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";

import useMovieData from "@/hook/useMovieData";
import MovieInfo from "./MovieInfo";
import MovieDetail from "./MovieDetail";
import { useAppSelector } from "@/hook/useRedux";
import { MovieDetailType } from "@/type/movie";

import { Grid } from "@mui/material";

/**
 *
 * @returns useInfiniteQuery를 사용한 무한 스크롤 영화 데이터
 */
export default function MovieList() {
  const selectedMovie = useAppSelector((state) => state.movieSlice);
  const [, setOpenDetail] = useState(false);
  const target = useRef<HTMLDivElement>(null);
  // useInfiniteQuery hooks
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovieData();

  // current observer
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
      { threshold: 1 }
    );
    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, fetchNextPage, hasNextPage]);

  return (
    <Grid container spacing={4}>
      {/* 영화 상세 정보 팝업 */}
      {selectedMovie && (
        <MovieDetail
          {...selectedMovie}
          setOpenDetail={setOpenDetail}
        ></MovieDetail>
      )}
      {data &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((movie: MovieDetailType) => (
              <MovieInfo key={movie.id} {...movie} />
            ))}
          </React.Fragment>
        ))}
      {/* 스피너 */}
      <PropagateLoader
        loading={isFetchingNextPage}
        size={150}
        cssOverride={{ display: "flex", margin: "0 auto" }}
      />
      {!hasNextPage && <div>End of List</div>}
      {/* overrides */}
      <div ref={target} />
    </Grid>
  );
}
