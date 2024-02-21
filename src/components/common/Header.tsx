import React from "react";
import styled from "styled-components";
import Category from "./Category";

export default function Header() {
  return (
    // <Container className="d-flex justify-content-between">
    <p>
      <Logo>나의 영화 일지</Logo>
      <Category />
    </p>
    // </Container>
  );
}

const Logo = styled("h1")`
  font-family: "logo";
  padding: 10px 5px;
`;
