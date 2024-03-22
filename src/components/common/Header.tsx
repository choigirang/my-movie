import React from "react";

import Category from "./Category";

import { styled as MuiStyled } from "@mui/material";
import { Container } from "@mui/material";

/**
 * @returns 카테고리를 포함한 헤더
 */
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
  padding: "10px 5px",
  fontFamily: "logo !important",
  fontSize: "32px !important",
  fontWeight: "700 !important",
});
