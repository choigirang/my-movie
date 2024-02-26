import {
  startOfMonth,
  getDay,
  getDaysInMonth,
  subDays,
  addDays,
  subMonths,
} from "date-fns";
import React, { useState } from "react";

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAYS_IN_WEEK = 7;

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const totalMonthDays = getDaysInMonth(currentDate);

  const generateCalendar = (date: Date) => {
    const firstDayOfMonth = startOfMonth(date);
    const startDayOfWeek = getDay(firstDayOfMonth);
    const totalDaysInMonth = getDaysInMonth(date);

    // 이전 달의 마지막 날짜들 추가
    const prevMonthDays = Array.from({ length: startDayOfWeek }, (_, i) =>
      subDays(firstDayOfMonth, startDayOfWeek - i).getDate()
    );

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
      (_, i) => i + 1
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
      calendar.push(calendarArray.slice(i, i + DAYS_IN_WEEK));
    }

    return calendar;
  };

  return {
    weekCalendarList: generateCalendar(currentDate),
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};
export default useCalendar;
