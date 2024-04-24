"use client";

import useMakeCalendar from "@/hook/useMakeCalendar";
import CurDate from "./curDate";
import Week from "./week";

export default function AboutMap({ children }: { children: React.ReactNode }) {
  const { weekCalendarList, currentDate, setCurrentDate } = useMakeCalendar();

  return (
    <>
      <div className="flex justify-center items-center gap-2 text-white text-[32px] mb-5">
        <CurDate curDate={currentDate} setDate={setCurrentDate} />
      </div>
      {children}
      {weekCalendarList.map((week, key) => (
        <Week key={key} days={week}></Week>
      ))}
    </>
  );
}
