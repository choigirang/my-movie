import { Container, styled as MuiStyled } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Week({
  days,
  clickDay,
}: {
  days: Array<number>;
  clickDay: Dispatch<SetStateAction<boolean>>;
}) {
  const [curDate, setCurData] = useState(new Date().getDay());

  function satOrSunDay(num: number) {
    if (num === days[0]) return "#ff3d3d";
    else if (num === days[days.length - 1]) return "#3d77ff";
    else return "white";
  }

  if (!days) return <div>조회된 데이터가 없습니다.</div>;

  return (
    <Wrapper>
      {days.map((day, index) => (
        <Days
          key={index}
          changeColor={satOrSunDay(day)}
          today={curDate === day}
          onClick={() => clickDay(true)}
        >
          {day !== 0 && day}
        </Days>
      ))}
    </Wrapper>
  );
}

const Wrapper = MuiStyled(Container)({
  display: "grid",
  color: "white",
  gridTemplateColumns: "repeat(7, 1fr)",
});

const Days = MuiStyled("div")<{ changeColor: string; today: boolean }>(
  ({ changeColor, today }) => ({
    width: "100%",
    height: 100,
    padding: 10,
    borderRadius: 5,
    color: changeColor,
    backgroundColor: today ? "#344340ff" : "none",

    "&:hover": {
      transition: "all .3s",
      backgroundColor: "#526965",
      cursor: "pointer",
    },
  })
);
