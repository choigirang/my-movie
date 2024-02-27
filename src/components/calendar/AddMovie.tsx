import React, { Dispatch, SetStateAction } from "react";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import SearchMovie from "./SearchMovie";

export default function AddMovie({
  addCalendar,
}: {
  addCalendar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AlertBg setState={addCalendar}>
      <Alert setState={addCalendar}>
        <SearchMovie></SearchMovie>
      </Alert>
    </AlertBg>
  );
}
