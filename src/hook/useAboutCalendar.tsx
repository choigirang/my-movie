import { selectMovie } from "@/store/modules/movieSelectSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { SaveMovieInfo } from "@/type/movie";
import { code } from "@/constant/genreCode";
import { Dispatch, SetStateAction } from "react";

export default function useAboutCalendar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.movieSlice);

  const existDay = (
    date: string | boolean,
    clickDay: Dispatch<SetStateAction<boolean>>
  ) => {
    dispatch(selectMovie({ ...state, date }));
    clickDay(true);
  };

  const dateTitle = (day: number, length: number) => {
    if (length !== 0)
      return (
        <>
          <div>{day}</div>
          <div className="text-xs">{`+ ${length >= 100 ? 99 : length}`}</div>
        </>
      );
    else return <div>{day}</div>;
  };

  const addMovieData = (movies: SaveMovieInfo, key: number) => {
    const { title, genre_ids } = movies;
    const badgeColor = genre_ids[0] ? code[genre_ids[0]].color : "#000000";
    return (
      <li
        className="flex justify-start items-center truncate w-full min-h-[12px] gap-[10px] text-xs"
        key={key}
      >
        <span
          style={{
            width: 8,
            height: 8,
            backgroundColor: badgeColor,
            borderRadius: "50%",
          }}
        />
        <span>{title}</span>
      </li>
    );
  };

  return { existDay, dateTitle, addMovieData };
}
