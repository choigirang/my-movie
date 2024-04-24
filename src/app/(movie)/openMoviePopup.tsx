"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import SearchMovie from "./searchMovie";
import SelectMovieData from "./selectMovieData";
import SavedMovieData from "./savedMovieData";
import { resetSelect } from "@/store/modules/movieSelectSlice";
import { XMarkIcon } from "@heroicons/react/16/solid";

/**
 * /calendar 의 영화 추가
 * @returns 배경 및 영화 검색창
 */
export default function OpenMoviePopup() {
  const selected = useAppSelector((state) => state.movieSlice);

  const dispatch = useAppDispatch();

  const resetAlertWithMovieData = () => {
    dispatch(resetSelect());
  };

  return (
    <React.Fragment>
      {(selected.title || selected.date) && (
        <div
          className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-999"
          onClick={resetAlertWithMovieData}
        >
          <div className="relative w-[60%] h-[90%] flex flex-col justify-center items-center bg-[#303030] rounded-3xl">
            <button onClick={resetAlertWithMovieData}>
              <XMarkIcon
                className="absolute right-5 top-5 text-black m-0 transition-custom hover:text-white"
                width={24}
                height={24}
              />
            </button>
            <SearchMovie />
            <SelectMovieData />
            <SavedMovieData />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
