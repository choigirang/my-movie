import { Button, styled as MuiStyled } from "@mui/material";
import React, { ChangeEvent, EventHandler, useState } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { MovieInfoProps } from "@/type/movie";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { resetSelect } from "@/store/modules/movieSelectSlice";
import { savedMovie } from "@/store/modules/savedMovieSlice";

export default function AddCalendarBtn(movieDetail: MovieInfoProps) {
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state.movieSlice);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const dispatchHandler = () => {
    if (!date || !select) return alert("영화 정보와 날짜를 입력해주세요.");
    dispatch(savedMovie({ ...movieDetail, date }));
    dispatch(resetSelect());
  };

  return (
    <Container>
      <input type="date" onChange={handleDateChange} />
      <CustomBtn
        startIcon={<EditCalendarIcon />}
        variant="contained"
        onClick={dispatchHandler}
      >
        캘린더 추가
      </CustomBtn>
    </Container>
  );
}

const Container = MuiStyled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: 20,
});

const CustomBtn = MuiStyled(Button)({
  padding: "10px 20px",
});
