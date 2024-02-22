import React from "react";
import { styled as MuiStyled } from "@mui/material";
import Category from "./Category";
import { Box, Container } from "@mui/material";

export default function Header() {
  return (
    <Container
      sx={{
        width: "100%",
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth="lg"
      fixed
    >
      <Logo>나의 영화 일지</Logo>
      <Category />
    </Container>
  );
}

const Logo = MuiStyled("h1")({
  fontFamily: "logo !important",
  padding: "10px 5px",
});
