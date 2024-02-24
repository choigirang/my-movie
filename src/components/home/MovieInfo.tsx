import { MovieDetailType } from "@/type/movie";
import { Grid, styled as MuiStyled } from "@mui/material";
import React from "react";

export default function MovieInfo(each: MovieDetailType) {
  const { title } = each;

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
        paddingLeft: "0 !important",
      }}
    >
      <Title>{title}</Title>
    </Grid>
  );
}

const Title = MuiStyled("span")({
  fontWeight: 500,
  fontSize: 24,
});
