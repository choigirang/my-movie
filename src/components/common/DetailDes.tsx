import React from "react";

import AddCalendarBtn from "./AddCalendarBtn";
import { useAppSelector } from "@/hook/useRedux";

import { Grid, styled as MuiStyled } from "@mui/material";
import StarSharpIcon from "@mui/icons-material/StarSharp";

/**
 * 선택된 영화 보여줄 컴포넌트
 * @returns 영화 상세 정보
 */
export default function DetailDes() {
  const seletedMovie = useAppSelector((state) => state.movieSlice);

  return (
    <GridCustom
      item
      xs
      sx={{ flexDirection: "column", justifyContent: "center" }}
    >
      {/* 타이틀 */}
      <TitleBox>
        <h1>{seletedMovie.title}</h1>
        <h2>{seletedMovie.original_title}</h2>
      </TitleBox>
      {/* 개봉일 */}
      <Date>{seletedMovie.release_date}</Date>
      {/* 별점 */}
      <Average>
        <StarSharpIcon sx={{ fontSize: 24, color: "yellow" }}></StarSharpIcon>
        <span>{seletedMovie.vote_average.toFixed(1)}</span>
      </Average>
      {/* 설명 */}
      <Des>{seletedMovie.overview}</Des>
      {/* 캘린더 추가 */}
      <AddCalendarBtn />
    </GridCustom>
  );
}

const GridCustom = MuiStyled(Grid)({
  width: "100%",
  display: "flex",
  justifyContent: "start",
  alignItems: "start",
  position: "relative",
  color: "white",
  paddingTop: "50px !important", // 위 여백 설정
  paddingBottom: "50px", // 아래 여백 설정
  gap: 20,
});

const TitleBox = MuiStyled("div")({
  display: "flex",
  alignItems: "end",
  gap: 10,

  h1: {
    fontSize: 32,
    fontWeight: 700,
  },

  h2: {
    fontSize: 24,
    color: "rgba(255,255,255,.7)",
  },
});

const Date = MuiStyled("span")({
  fontSize: 21,
  color: "rgba(255,255,255,.7)",
});

const Average = MuiStyled("div")(({}) => ({
  display: "flex",
  lineHeight: "24px",
  gap: 3,
  color: "white",
  fontSize: 24,

  span: {
    verticalAlign: "middle",
  },
}));

const Des = MuiStyled("div")({
  width: "100%",
  height: 200,
  textWrap: "wrap",
  overflow: "scroll",
  lineHeight: "21px",
  color: "rgba(255,255,255,.7)",
});
