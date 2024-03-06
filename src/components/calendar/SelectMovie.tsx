import { Grid, styled as MuiStyled } from "@mui/material";
import React from "react";
import ShowSelectMovie from "./ShowSelectMovie";

export default function SelectMovie() {
  return (
    <CustomGrid container direction="column">
      <ShowSelectMovie></ShowSelectMovie>
    </CustomGrid>
  );
}

const CustomGrid = MuiStyled(Grid)({
  height: "100%",
  width: "100%",
});
