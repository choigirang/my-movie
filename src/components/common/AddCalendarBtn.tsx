import React, { ChangeEvent, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { resetSelect } from "@/store/modules/movieSelectSlice";
import { savedMovie } from "@/store/modules/savedMovieSlice";

import { Button, styled as MuiStyled } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

/**
 * 영화 저장 버튼, redux에 저장된 영화 데이터를 바탕으로 데이터 추가
 * @returns 날짜 input, 선택 dispatch
 */
export default function AddCalendarBtn() {
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state.movieSlice);

  useEffect(() => {
    setDate(select.date);
  }, []);

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

  const changeDateForm = () => {
    if (select.date !== "") {
      const dateString = select.date;
      const dateParts = dateString.split("-");
      const year = dateParts[0];
      const month =
        dateParts[1].length === 1 ? `0${dateParts[1]}` : dateParts[1];
      const day = dateParts[2].length === 1 ? `0${dateParts[2]}` : dateParts[2];
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    } else {
      const year = new Date().getFullYear();
      const month =
        (new Date().getMonth() + 1).toString().length === 1
          ? `0${new Date().getMonth() + 1}`
          : `${new Date().getMonth() + 1}`;
      const date =
        new Date().getDate().toString().length === 1
          ? `0${new Date().getDate()}`
          : `${new Date().getDate()}`;

      return `${year}-${month}-${date}`;
    }
  };

  return (
    <Container>
      {/* !클릭한 날짜 전달하기  */}
      <input type="date" onChange={handleDateChange} value={changeDateForm()} />
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
