import { Button, styled as MuiStyled } from "@mui/material";
import React, { ChangeEvent, EventHandler, useState } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { MovieInfoProps } from "@/type/movie";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { resetSelect } from "@/store/modules/movieSelectSlice";
import { savedMovie } from "@/store/modules/savedMovieSlice";

export default function AddCalendarBtn() {
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state.movieSlice);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const splitingDate = e.target.value.split("-");
    const trimmedDate = splitingDate.map((str) => {
      if (str.startsWith("0")) {
        return str.substr(1);
      }
      return str;
    });
    const deleteZeroDate = trimmedDate.join("-");
    setDate(deleteZeroDate);
  };

  const dispatchHandler = () => {
    if (!date || !select) return alert("영화 정보와 날짜를 입력해주세요.");
    dispatch(savedMovie({ ...select, date }));
    dispatch(resetSelect());
  };

  return (
    <Container>
      {/* !클릭한 날짜 전달하기  */}
      <input type="date" onChange={handleDateChange} value={"2024-05-03"} />
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
