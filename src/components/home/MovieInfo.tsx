import { MovieDetailType } from "@/type/movie";
import { Grid, styled as MuiStyled } from "@mui/material";
import React, { useState } from "react";
import MovieImg from "./MovieImg";

export default function MovieInfo(each: MovieDetailType) {
  const [hover, setHover] = useState(false);
  const { title, poster_path: imgUrl, vote_average: vote } = each;

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
    >
      <MovieImg $mouseHover={hover} url={imgUrl} />
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
  })
);
