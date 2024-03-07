import { code } from "@/constant/genreCode";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { selectMovie } from "@/store/modules/movieSelectSlice";
import { SaveMovieInfo, SelectMovieData } from "@/type/movie";
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
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.movieSlice);

  const satOrSunDay = (num: number) => {
    if (num === 0) return "#ff3d3d";
    else if (num === days.length - 1) return "#3d77ff";
    else return "white";
  };

  const existDay = (existDay: boolean, date: string | boolean) => {
    if (!existDay || typeof date === "boolean") return false;
    else {
      dispatch(selectMovie({ ...state, date }));
      clickDay(true);
      return true;
    }
  };

  const dateTitle = (day: number, length: number) => {
    if (length !== 0)
      return (
        <React.Fragment>
          <div>{day}</div>
          <LengthOfData>+{length >= 100 ? 99 : length}</LengthOfData>
        </React.Fragment>
      );
    else return <div>{day}</div>;
  };

  const addMovie = (movies: SaveMovieInfo, key: number) => {
    const { title, genre_ids } = movies;
    const badgeColor = genre_ids[0] ? code[genre_ids[0]].color : "#000000";
    return (
      <MovieList key={key}>
        <Badge style={{ backgroundColor: badgeColor }} />
        {title}
      </MovieList>
    );
  };

  if (!days) return <div>조회된 데이터가 없습니다.</div>;

  return (
    <Wrapper>
      {days.map((day, index) => {
        const notEmpty = day !== 0;
        return (
          <Days
            key={index}
            changeColor={satOrSunDay(index)}
            trashValue={!notEmpty}
            today={curDate === day}
            onClick={() => existDay(notEmpty, notEmpty && day.date)}
          >
            <DayDate className="day">
              {notEmpty &&
                dateTitle(new Date(day.date).getDate(), day.movies.length)}
            </DayDate>
            {notEmpty && day.movies.map((info, key) => addMovie(info, key))}
          </Days>
        );
      })}
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
  display: "flex",
  flexDirection: "column",
  gap: 10,
  width: "100%",
  height: 100,
  padding: 10,
  borderRadius: 5,
  color: "#878787",
  backgroundColor: today ? "#344340ff" : "none",
  overflow: "scroll",

  "& .day": {
    color: changeColor,
  },

  ...(!trashValue && {
    "&:hover": {
      transition: "all .3s",
      backgroundColor: "#526965",
      cursor: "pointer",
    },
  }),
}));

const DayDate = MuiStyled("div")({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
});

const LengthOfData = MuiStyled("div")({
  width: 12,
  height: 12,
  color: "white",
  fontSize: 12,
  fontWeight: 700,
  textAlign: "center",
  letterSpacing: 1.3,
});

const MovieList = MuiStyled("div")({
  width: "100%",
  minHeight: 12,
  display: "flex",
  gap: 10,
  fontSize: 12,
  justifyContent: "start",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const Badge = MuiStyled("div")({
  minWidth: 10,
  height: 10,
  borderRadius: "50%",
});
