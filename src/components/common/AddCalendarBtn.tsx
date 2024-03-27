import React, { ChangeEvent, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { resetSelect } from "@/store/modules/movieSelectSlice";
import { savedMovie } from "@/store/modules/savedMovieSlice";

import { Button, styled as MuiStyled } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

const curDate = new Date();
const year = curDate.getFullYear();
const month = curDate.getMonth();
const day = curDate.getDate();
const strDate = `${year}-${month + 1 >= 10 ? month + 1 : `0${month + 1}`}-${
  day >= 10 ? day : `0${day}`
}`;

/**
 * 영화 저장 버튼, redux에 저장된 영화 데이터를 바탕으로 데이터 추가
 * @returns 날짜 input, 선택 dispatch
 */
export default function AddCalendarBtn() {
  const [date, setDate] = useState(strDate);
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state.movieSlice);

  console.log(date);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectDate = e.target.value;
    setDate(selectDate);
  };

  const dispatchHandler = () => {
    if (!date || !select) return alert("영화 정보와 날짜를 입력해주세요.");
    dispatch(savedMovie({ ...select, date: changeDateForm() }));
    dispatch(resetSelect());
  };

  // new Date와 date-fns의 폼이 같지 않기 때문에 날짜 변환
  const changeDateForm = () => {
    const splitDate = date.split("-");
    let [year, month, day] = splitDate;

    if (month.startsWith("0")) {
      month = month.substring(1);
    }

    if (day.startsWith("0")) {
      day = day.substring(1);
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <Container>
      {/* !클릭한 날짜 전달하기  */}
      <input type="date" onChange={handleDateChange} value={date} />
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
