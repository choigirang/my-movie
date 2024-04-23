import React from "react";
import { code } from "@/constant/genreCode";

import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { deleteMovie } from "@/store/modules/savedMovieSlice";
import { SaveMovieInfo } from "@/type/movie";
import { TrashIcon } from "@heroicons/react/16/solid";

/**
 * AddMovie의 SelectMovie로 선택된 영화 데이터 매핑
 * @returns 영화 삭제 및 정보
 */
export default function SavedMovieData() {
  const selectData = useAppSelector((state) => state.movieSlice);
  const savedMovie = useAppSelector((state) => state.savedMovieSlice);
  const dispatch = useAppDispatch();

  const movieOfDate: SaveMovieInfo[] = savedMovie[selectData.date];

  const addMovieData = (movies: SaveMovieInfo) => {
    const { title, genre_ids } = movies;
    const date = selectData.date;
    const data = { date, ...movies };
    const badgeColor = genre_ids[0] ? code[genre_ids[0]].color : "#000000";
    const genre = genre_ids[0] && code[genre_ids[0]].category;

    return (
      <React.Fragment>
        <button
          className="cursor-pointer"
          onClick={() => dispatch(deleteMovie(data))}
        >
          <TrashIcon
            width={16}
            height={16}
            className="text-yellow-200 transition-custom hover:text-stone-900"
          />
        </button>
        <div
          className="min-w-[10px] h-[10px] rounded-[50%]"
          style={{ backgroundColor: badgeColor }}
        />
        <div>{genre}</div>
        <div>{title}</div>
      </React.Fragment>
    );
  };

  return (
    <div className="w-full max-h-[300px] flex flex-col items-center text-white">
      <h2 className="text-md text-[#aeaeae] mb-5">• 영화 목록 •</h2>
      <ul className="flex flex-col max-h-[250px] overflow-scroll gap-4">
        {movieOfDate &&
          movieOfDate.map((data, idx) => (
            <li
              className="grid grid-cols-savedMovieList place-items-center gap-1"
              key={idx}
            >
              {addMovieData(data)}
            </li>
          ))}
      </ul>
    </div>
  );
}
