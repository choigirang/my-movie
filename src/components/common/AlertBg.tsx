import React, { Dispatch, ReactNode } from "react";

import { useAppDispatch } from "@/hook/useRedux";
import { AlertProps } from "@/type/common";
import { resetSelect } from "@/store/modules/movieSelectSlice";

import { styled as MuiStyled } from "@mui/material";

/**
 * @returns 영화 선택 시 배경
 */
export default function AlertBg({ children }: AlertProps) {
  const dispatch = useAppDispatch();

  return <Bg onClick={() => dispatch(resetSelect())}>{children}</Bg>;
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
