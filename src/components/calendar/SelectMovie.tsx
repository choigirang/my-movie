import React from "react";

import { useAppSelector } from "@/hook/useRedux";
import ImageWithMovieDetail from "../common/ImageWithMovieDetail";

import { Grid, styled as MuiStyled } from "@mui/material";

/**
 * redux에 저장된 영화 데이터
 * @returns 선택된 영화 데이터 정보
 */
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
