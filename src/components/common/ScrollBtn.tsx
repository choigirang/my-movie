"use client";

import React from "react";
import useMoveScroll from "@/hook/useScrollTop";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";

export default function ScrollBtn() {
  const scrollTop = useMoveScroll();

  return (
    <ArrowCircleLeftSharpIcon
      onClick={() => scrollTop}
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, -50%) rotate(90deg)",
        display: "flex",
        margin: "0 auto",
        fill: "white",
        fontSize: 50,
        zIndex: 998,
        "&:hover": {
          cursor: "pointer",
          transition: "all .3s",
        },
      }}
    />
  );
}
