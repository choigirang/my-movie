import useMovieData from "@/hook/useMovieData";
import { Container, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MovieInfo from "./MovieInfo";
import { MovieDetailType } from "@/type/movie";
import { PropagateLoader } from "react-spinners";
import MovieDetail from "./MovieDetail";
import { useAppSelector } from "@/hook/useRedux";

export default function MovieList() {
  const { id, title, genre_ids } = useAppSelector((state) => state.movieSlice);
  const [detailData, setDetailData] = useState<MovieDetailType | undefined>();
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
  }, [target.current, data?.pageParams]);

  return (
    <Grid container spacing={4}>
      {/* 영화 상세 정보 팝업 */}
      {detailData && (
        <MovieDetail
          {...detailData}
          setDetailData={setDetailData}
        ></MovieDetail>
      )}
      {data &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((movie: MovieDetailType) => (
              <MovieInfo
                key={movie.id}
                {...movie}
                setDetailData={setDetailData}
              />
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
