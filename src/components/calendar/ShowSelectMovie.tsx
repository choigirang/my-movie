import { useAppSelector } from "@/hook/useRedux";
import { Grid, styled as MuiStyled } from "@mui/material";
import React from "react";
import ImageWithMovieDetail from "../common/ImageWithMovieDetail";

export default function ShowSelectMovie() {
  const selectedMovieData = useAppSelector((state) => state.movieSlice);

  return (
    <ItemGrid item>
      {selectedMovieData.title && (
        <ImageWithMovieDetail {...selectedMovieData} />
      )}
    </ItemGrid>
  );
}

const ItemGrid = MuiStyled(Grid)({});
