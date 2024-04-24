import useAboutCalendar from "@/hook/useAboutCalendar";
import { SaveMovieInfo } from "@/type/movie";
import { Dispatch, SetStateAction } from "react";

interface AboutDay {
  day: 0 | { date: string; movies: Array<SaveMovieInfo> };
  clickDay: Dispatch<SetStateAction<boolean>>;
}

export default function Day(dayInfo: AboutDay) {
  const { day, clickDay } = dayInfo;
  const { dateTitle, existDay, addMovieData } = useAboutCalendar();

  const notEmptyDay = day !== 0;

  return (
    <li
      className="h-full flex flex-col items-start w-full first:text-[#ff3d3d] last:text-[#3d77ff] overflow-scroll"
      style={{ cursor: notEmptyDay ? "pointer" : "normal" }}
      onClick={notEmptyDay ? () => existDay(day.date, clickDay) : undefined}
    >
      {notEmptyDay && (
        <div>{dateTitle(new Date(day.date).getDate(), day.movies.length)}</div>
      )}
      <ul>
        {notEmptyDay &&
          day.movies.length !== 0 &&
          day.movies.map((info, key) => addMovieData(info, key))}
      </ul>
    </li>
  );
}
