import React, { Dispatch, SetStateAction } from "react";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import SearchMovie from "./SearchMovie";
import SelectMovie from "./SelectMovie";
import SavedMovieData from "./SavedMovieData";

const style = {
  display: "grid",
};

export default function AddMovie({
  addCalendar,
}: {
  addCalendar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AlertBg setState={addCalendar}>
      <Alert setState={addCalendar} customstyle={style}>
        <SearchMovie />
        <SelectMovie />
        <SavedMovieData />
      </Alert>
    </AlertBg>
  );
}
