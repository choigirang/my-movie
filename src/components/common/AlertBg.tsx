import React, { Dispatch, ReactNode } from "react";
import { styled as MuiStyled } from "@mui/material";
import { AlertProps } from "@/type/common";

export default function AlertBg({ setState, children }: AlertProps) {
  return <Bg onClick={() => setState(undefined)}>{children}</Bg>;
}

const Bg = MuiStyled("div")(({}) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 999,
}));
