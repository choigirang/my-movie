import React, { useEffect, useState } from "react";
import { startOfMonth, getDay, getDaysInMonth } from "date-fns";

import { useAppSelector } from "./useRedux";

const DAYS_IN_WEEK = 7;

/**
 * CalendarMap 컴포넌트에서 사용된 날짜 계산 훅
 * @returns 각 주마다 날짜가 기입된 배열
 */
export default function useMakeCalendar() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const savedMovieData = useAppSelector((state) => state.savedMovieSlice);

  const generateCalendar = (date: Date) => {
    const firstDayOfMonth = startOfMonth(date);
    const startDayOfWeek = getDay(firstDayOfMonth);
    const totalDaysInMonth = getDaysInMonth(date);

    // 이전 달의 마지막 날짜들 추가
    const prevMonthDays = Array.from({ length: startDayOfWeek }, (_, i) => 0);

    // 현재 달의 날짜들 추가
    const currentMonthDays = Array.from(
      { length: totalDaysInMonth },
      (_, i) => i + 1
    );

    // 다음 달의 처음 일부 추가
    const nextMonthDaysCount =
      DAYS_IN_WEEK -
      ((prevMonthDays.length + currentMonthDays.length) % DAYS_IN_WEEK);
    const nextMonthDays = Array.from(
      { length: nextMonthDaysCount },
      (_, i) => 0
    );

    // 캘린더 배열 생성
    const calendarArray = [
      ...prevMonthDays,
      ...currentMonthDays,
      ...nextMonthDays,
    ];

    // 주 단위로 묶기
    const calendar = [];
    for (let i = 0; i < calendarArray.length; i += DAYS_IN_WEEK) {
      const month = currentDate.getMonth() + 1;
      const week = calendarArray.slice(i, i + DAYS_IN_WEEK).map((day) => {
        if (day === 0) return 0;
        const date = `${currentDate.getFullYear()}-${month}-${day}`;
        const movies = savedMovieData[date] || [];
        return { date, movies };
      });
      calendar.push(week);
    }

    return calendar;
  };

  return {
    weekCalendarList: generateCalendar(currentDate),
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
}
