import { Container, styled as MuiStyled } from "@mui/material";
import React from "react";

export default function Week({ days }: { days: Array<number> }) {
  return (
    <Wrapper>
      {days.map((day, index) => (
        <Days key={index}>{day}</Days>
      ))}
    </Wrapper>
  );
}

const Wrapper = MuiStyled(Container)({
  display: "grid",
  color: "white",
  gridTemplateColumns: "repeat(7, 1fr)" /* 7개의 열, 각 열은 동일한 너비 */,
});

const Days = MuiStyled("div")({
  width: 100,
  height: 100,
});
