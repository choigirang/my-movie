import { useAppSelector } from "@/hook/useRedux";
import { SaveMovieInfo } from "@/type/movie";
import { Container, styled as MuiStyled } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Week({
  days,
  clickDay,
}: {
  days: (0 | { date: string; movies: Array<SaveMovieInfo> })[];
  clickDay: Dispatch<SetStateAction<boolean>>;
}) {
  const [curDate, setCurData] = useState(new Date().getDate());

  const satOrSunDay = (num: number) => {
    if (num === 0) return "#ff3d3d";
    else if (num === days.length - 1) return "#3d77ff";
    else return "white";
  };

  const existDay = (existDay: boolean) => {
    if (!existDay) return false;
    else {
      clickDay(true);
      return true;
    }
  };

  const addMovie = (movies: SaveMovieInfo) => {
    const { title, genre_ids, vote_average } = movies;
    console.log("movies", movies);

    return <div>{title}</div>;
  };

  if (!days) return <div>조회된 데이터가 없습니다.</div>;

  return (
    <Wrapper>
      {days.map((day, index) => (
        <Days
          key={index}
          changeColor={satOrSunDay(index)}
          trashValue={day === 0}
          today={curDate === day}
          onClick={() => existDay(day !== 0)}
        >
          <span>{day !== 0 && new Date(day.date).getDate()}</span>
          {day !== 0 && day.movies.map((info) => addMovie(info))}
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

const Days = MuiStyled("div")<{
  changeColor: string;
  today: boolean;
  trashValue: boolean;
}>(({ changeColor, today, trashValue }) => ({
  width: "100%",
  height: 100,
  padding: 10,
  borderRadius: 5,
  color: changeColor,
  backgroundColor: today ? "#344340ff" : "none",
  overflow: "scroll",

  ...(!trashValue && {
    "&:hover": {
      transition: "all .3s",
      backgroundColor: "#526965",
      cursor: "pointer",
    },
  }),
}));
