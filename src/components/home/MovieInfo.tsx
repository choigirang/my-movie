import React, { useState } from "react";

import MovieImg from "./MovieImg";
import { MovieDetailType } from "@/type/movie";
import { useAppDispatch } from "@/hook/useRedux";
import { selectMovie } from "@/store/modules/movieSelectSlice";

import { Grid, styled as MuiStyled } from "@mui/material";

/**
 *
 * @param each MovieList의 영화 데이터
 * @returns MovieList의 매핑된 영화 데이터
 */
export default function MovieInfo(each: MovieDetailType) {
  const [hover, setHover] = useState(false);
  const { title, poster_path: imgUrl, vote_average: vote } = each;
  const dispatch = useAppDispatch();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => dispatch(selectMovie({ ...each }))}
    >
      <MovieImg
        $mouseHover={hover}
        url={imgUrl}
        vote={Number(vote.toFixed(1))}
      />
      <Title $mouseHover={hover}>{title}</Title>
    </Grid>
  );
}

const Title = MuiStyled("span")<{ $mouseHover: boolean }>(
  ({ $mouseHover }) => ({
    width: "200px",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "0 20px",
    transform: "translate(-50%,-50%)",
    fontWeight: 500,
    fontSize: 25,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textAlign: "center",
    color: "white",
    opacity: $mouseHover ? 1 : 0,
    transition: "all .3s",

    "&:hover": {
      cursor: "pointer",
    },
  })
);
