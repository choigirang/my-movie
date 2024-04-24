"use client";

import { subMonths } from "date-fns";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { Dispatch, SetStateAction } from "react";

export default function CurDate({
  curDate,
  setDate,
}: {
  curDate: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}) {
  const handleMonth = (num: number) => {
    setDate(subMonths(curDate, num));
  };

  return (
    <>
      <button onClick={() => handleMonth(1)}>
        <ArrowLeftCircleIcon width={20} height={20} />
      </button>
      <span>
        {curDate.getFullYear()}년 {curDate.getMonth() + 1}월
      </span>
      <button onClick={() => handleMonth(-1)}>
        <ArrowRightCircleIcon width={20} height={20} />
      </button>
    </>
  );
}
