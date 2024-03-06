import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Grid, Button, styled as MuiStyled } from "@mui/material";
import { AlertProps, CustomStyle } from "@/type/common";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch } from "@/hook/useRedux";
import { resetSelect } from "@/store/modules/movieSelectSlice";

export default function Alert({ children, setState, customStyle }: AlertProps) {
  const dispatch = useAppDispatch();

  const resetAlertWithMovieData = () => {
    setState(false);
    dispatch(resetSelect());
  };

  return (
    <GridCustom
      container
      spacing={1200 <= window.innerWidth ? 2 : 1}
      columnSpacing={1200 <= window.innerWidth ? 1 : 2}
      onClick={(e) => e.stopPropagation()}
      customStyle={customStyle}
    >
      {children}
      {/* 닫기 버튼 */}
      <CloseBtn
        startIcon={<ClearIcon />}
        onClick={() => resetAlertWithMovieData()}
      />
    </GridCustom>
  );
}

const GridCustom = MuiStyled(Grid)<{ customStyle?: CustomStyle }>(
  ({ customStyle }) => ({
    flexDirection: "row",
    width: "70%",
    height: "90%",
    display: "flex",
    backgroundColor: "rgb(24, 24, 24)",
    borderRadius: "10px",
    position: "relative",
    padding: "20px",

    ...(customStyle && {
      ...customStyle,
    }),

    /* 타블렛 */
    "@media screen and (min-width: 768px) and (max-width: 1200px)": {
      flexDirection: "column",
      overflow: "scroll",
      gap: 20,
      "& > * + *": {
        // 첫 번째 자식 이후의 모든 자식에 대해
        marginTop: 0, // 상단 간격을 없애줌
      },
    },
  })
);

const CloseBtn = MuiStyled(Button)({
  position: "absolute",
  top: 0,
  right: 20,
  width: 24,
  height: 30,
  backgroundColor: "rgba(0,0,0,0)",

  span: {
    margin: 0,
  },
});
