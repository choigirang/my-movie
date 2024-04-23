"use client";

import PersistProvider from "@/provider/persist";
import Day from "./day";
import { useState } from "react";
import { SaveMovieInfo } from "@/type/movie";
import OpenMoviePopup from "../(movie)/openMoviePopup";

/**
 * @param day CalendarMap의 useCalendar로 계산된 날짜 정보
 * @param clickDay 선택한 날짜 정보
 * @returns 날짜 정보에 따른 주 구성
 */
export default function Week({
  days,
}: {
  days: (0 | { date: string; movies: Array<SaveMovieInfo> })[];
}) {
  const [addCalender, setAddCalendar] = useState<boolean>(false);

  return (
    <PersistProvider>
      <ul className="grid h-[100px] text-white grid-cols-7 gap-1">
        {days.map((day, index) => {
          return <Day key={index} day={day} clickDay={setAddCalendar} />;
        })}
      </ul>
      {addCalender && <OpenMoviePopup />}
    </PersistProvider>
  );
}
