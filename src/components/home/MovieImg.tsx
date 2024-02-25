import { Container, styled as MuiStyled } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function MovieImg({
  url,
  $mouseHover,
}: {
  url: string;
  $mouseHover: boolean;
}) {
  const baseUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <Container sx={{ width: 200, padding: "20px 0" }}>
      <PosterImg
        src={baseUrl + url}
        alt="poster"
        width={200}
        height={300}
        $mouseHover={$mouseHover}
        priority
      />
    </Container>
  );
}

const PosterImg = MuiStyled(Image)<{ $mouseHover: boolean }>(
  ({ $mouseHover }) => ({
    opacity: $mouseHover ? 0.5 : 1,
    borderRadius: 10,
  })
);
