import React from "react";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import SearchMovie from "./SearchMovie";
import SelectMovie from "./SelectMovie";
import SavedMovieData from "./SavedMovieData";
import { useAppSelector } from "@/hook/useRedux";

/**
 * /calendar 의 영화 추가
 * @returns 배경 및 영화 검색창
 */
export default function AddMovie() {
  const selectedDate = useAppSelector((state) => state.movieSlice);

  return (
    <React.Fragment>
      {selectedDate.date && (
        <AlertBg>
          <Alert>
            <SearchMovie />
            <SelectMovie />
            <SavedMovieData />
          </Alert>
        </AlertBg>
      )}
    </React.Fragment>
  );
}
