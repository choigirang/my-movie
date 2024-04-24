import React, { ChangeEvent, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { resetSelect } from "@/store/modules/movieSelectSlice";
import { savedMovie } from "@/store/modules/savedMovieSlice";
import { PencilIcon } from "@heroicons/react/16/solid";

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
export default function AddMovieToCalendar() {
  const [date, setDate] = useState(strDate);
  const dispatch = useAppDispatch();
  const select = useAppSelector((state) => state.movieSlice);

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
    <div className="w-full flex justify-center gap-4 text-black">
      {/* !클릭한 날짜 전달하기  */}
      <input
        type="date"
        className="p-2 text-xs rounded-lg"
        onChange={handleDateChange}
        value={date}
      />
      <button
        className="flex gap-1 items-center bg-stone-900 rounded-lg text-white p-2 transition-custom hover:bg-yellow-700"
        onClick={dispatchHandler}
      >
        <PencilIcon width={16} height={16} />
        <span className="text-xs">캘린더 추가</span>
      </button>
    </div>
  );
}
