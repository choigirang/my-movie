import React, { Dispatch, SetStateAction } from "react";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import SearchMovie from "./SearchMovie";
import SelectMovie from "./SelectMovie";

const style = {
  display: "grid",
  gridTemplateRows: "10% 90%",
};

export default function AddMovie({
  addCalendar,
}: {
  addCalendar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AlertBg setState={addCalendar}>
      <Alert setState={addCalendar} customStyle={style}>
        <SearchMovie />
        <SelectMovie />
      </Alert>
    </AlertBg>
  );
}
