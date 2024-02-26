import { Container, styled as MuiStyled } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarSharpIcon from "@mui/icons-material/StarSharp";

export default function MovieImg({
  url,
  $mouseHover,
  vote,
}: {
  url: string;
  $mouseHover: boolean;
  vote: number;
}) {
  const baseUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <Container
      sx={{ width: 200, padding: "20px 0", "&:hover": { cursor: "pointer" } }}
    >
      <PosterImg $mouseHover={$mouseHover}>
        <Image
          src={baseUrl + url}
          alt="poster"
          width={200}
          height={300}
          style={{
            borderRadius: 10,
          }}
          priority
        />
        <Average>
          <StarSharpIcon sx={{ fontSize: 12, color: "yellow" }}></StarSharpIcon>
          <span>{vote}</span>
        </Average>
      </PosterImg>
    </Container>
  );
}

const PosterImg = MuiStyled("div")<{ $mouseHover: boolean }>(
  ({ $mouseHover }) => ({
    width: 200,
    height: 300,
    opacity: $mouseHover ? 0.5 : 1,
    position: "relative",
  })
);

const Average = MuiStyled("div")(({}) => ({
  display: "flex",
  lineHeight: "12px",
  gap: 3,
  position: "absolute",
  padding: 5,
  borderRadius: 5,
  left: 10,
  top: 10,
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white",
  fontSize: 12,
}));
