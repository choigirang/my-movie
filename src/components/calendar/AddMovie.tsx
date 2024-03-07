import React, { Dispatch, SetStateAction } from "react";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import SearchMovie from "./SearchMovie";
import SelectMovie from "./SelectMovie";
import SavedMovieData from "./SavedMovieData";
import { useAppSelector } from "@/hook/useRedux";

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
