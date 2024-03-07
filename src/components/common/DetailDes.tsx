import { MovieInfoProps } from "@/type/movie";
import { Grid, styled as MuiStyled } from "@mui/material";
import React from "react";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import AddCalendarBtn from "./AddCalendarBtn";

export default function DetailDes(movieDetail: MovieInfoProps) {
  return (
    <GridCustom
      item
      xs
      sx={{ flexDirection: "column", justifyContent: "center" }}
    >
      {/* 타이틀 */}
      <TitleBox>
        <h1>{movieDetail.title}</h1>
        <h2>{movieDetail.original_title}</h2>
      </TitleBox>
      {/* 개봉일 */}
      <Date>{movieDetail.release_date}</Date>
      {/* 별점 */}
      <Average>
        <StarSharpIcon sx={{ fontSize: 24, color: "yellow" }}></StarSharpIcon>
        <span>{movieDetail.vote_average.toFixed(1)}</span>
      </Average>
      {/* 설명 */}
      <Des>{movieDetail.overview}</Des>
      {/* 캘린더 추가 */}
      <AddCalendarBtn />
    </GridCustom>
  );
}

const GridCustom = MuiStyled(Grid)({
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
