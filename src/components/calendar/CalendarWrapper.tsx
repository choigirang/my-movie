import useCalendar from "@/hook/useCalendar";
import { Container, styled as MuiStyled } from "@mui/material";
import React from "react";
import CalendarMap from "./CalendarMap";

export default function CalendarWrapper() {
  return (
    <Wrapper>
      <CalendarMap></CalendarMap>
    </Wrapper>
  );
}

const Wrapper = MuiStyled(Container)({
  display: "flex",
  justifyContent: "center",
  position: "relative",
});

// const StyledCalendar = MuiStyled(Calendar)({});
