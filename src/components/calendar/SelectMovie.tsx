import { Grid, styled as MuiStyled } from "@mui/material";
import React from "react";
import { useAppSelector } from "@/hook/useRedux";
import ImageWithMovieDetail from "../common/ImageWithMovieDetail";

export default function SelectMovie() {
  const selectedMovieData = useAppSelector((state) => state.movieSlice);

  return (
    <CustomGrid container direction="column">
      <ItemGrid item>
        {selectedMovieData.title && (
          <ImageWithMovieDetail {...selectedMovieData} />
        )}
      </ItemGrid>
    </CustomGrid>
  );
}

const CustomGrid = MuiStyled(Grid)({
  width: "100%",
  height: "100%",
  maxHeight: 500,
});

const ItemGrid = MuiStyled(Grid)({});
