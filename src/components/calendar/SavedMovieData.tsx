import { code } from "@/constant/genreCode";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { SaveMovieInfo } from "@/type/movie";
import { styled as MuiStyled } from "@mui/material";
import React from "react";
import { deleteMovie, savedMovie } from "@/store/modules/savedMovieSlice";
import Delete from "@mui/icons-material/Delete";

export default function SavedMovieData() {
  const selectData = useAppSelector((state) => state.movieSlice);
  const savedMovie = useAppSelector((state) => state.savedMovieSlice);
  const dispatch = useAppDispatch();

  const movieOfDate: SaveMovieInfo[] = savedMovie[selectData.date];

  const addMovieData = (movies: SaveMovieInfo) => {
    const { title, genre_ids } = movies;
    const date = selectData.date;
    const data = { date, ...movies };
    const badgeColor = genre_ids[0] ? code[genre_ids[0]].color : "#000000";
    const genre = genre_ids[0] && code[genre_ids[0]].category;

    return (
      <React.Fragment>
        <DeleteData onClick={() => dispatch(deleteMovie(data))}></DeleteData>
        <Badge style={{ backgroundColor: badgeColor }} />
        <div>{genre}</div>
        <div>{title}</div>
      </React.Fragment>
    );
  };

  return (
    <Wrapper>
      <h1>• 영화 목록 •</h1>
      <MovieDataWrapper>
        {movieOfDate &&
          movieOfDate.map((data, idx) => (
            <MovieData key={idx}>{addMovieData(data)}</MovieData>
          ))}
      </MovieDataWrapper>
    </Wrapper>
  );
}

const Wrapper = MuiStyled("div")({
  width: "100%",
  maxHeight: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",

  h1: {
    fontSize: 18,
    color: "#aeaeae",
    marginBottom: 20,
  },
});

const MovieDataWrapper = MuiStyled("div")({
  display: "flex",
  flexDirection: "column",
  maxHeight: 250,
  overflow: "scroll",
  gap: 15,
});

const MovieData = MuiStyled("div")({
  display: "grid",
  gridTemplateColumns: "auto 10px 200px 300px",
  gap: 15,
  alignItems: "center",
});

const Badge = MuiStyled("div")({
  minWidth: 10,
  height: 10,
  borderRadius: "50%",
});

const DeleteData = MuiStyled(Delete)({
  "&:hover": {
    cursor: "pointer",
    color: "gray",
  },
});
