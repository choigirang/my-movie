import React from "react";
import { useAppSelector } from "@/hook/useRedux";
import AddMovieBg from "./addMovieBg";
import AddMovie from "./addMovie";
import SearchMovie from "./searchMovie";
import SelectMovieData from "./selectMovieData";
import SavedMovieData from "./savedMovieData";

/**
 * /calendar 의 영화 추가
 * @returns 배경 및 영화 검색창
 */
export default function OpenMoviePopup() {
  const selectedDate = useAppSelector((state) => state.movieSlice);

  return (
    <React.Fragment>
      {selectedDate.date && (
        <AddMovieBg>
          <AddMovie>
            <SearchMovie />
            <SelectMovieData />
            <SavedMovieData />
          </AddMovie>
        </AddMovieBg>
      )}
    </React.Fragment>
  );
}
