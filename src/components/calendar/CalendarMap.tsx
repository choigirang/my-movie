import useCalendar from "@/hook/useCalendar";
import { Button, Container, styled as MuiStyled } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { subMonths } from "date-fns";
import Week from "./Week";
import AddMovie from "./AddMovie";

const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

export default function CalendarMap() {
  const { weekCalendarList, currentDate, setCurrentDate } = useCalendar();
  const [addCalender, setAddCalendar] = useState<boolean>(false);

  const handleMonth = (num: number) => {
    setCurrentDate(subMonths(currentDate, num));
  };

  return (
    <Wrapper>
      {/* 날짜 선택 */}
      <YearDate>
        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={() => handleMonth(1)}
        />
        <span>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </span>
        <Button
          startIcon={<KeyboardArrowRightIcon />}
          onClick={() => handleMonth(-1)}
        />
      </YearDate>
      {/* 캘린더 */}
      <WeekContainer>
        {/* 요일 */}
        <DaysList>
          {DAY_LIST.map((key) => (
            <SubTitle key={key}>{key}</SubTitle>
          ))}
        </DaysList>
        {weekCalendarList.map((week, key) => (
          <Week key={key} days={week} clickDay={setAddCalendar}></Week>
        ))}
      </WeekContainer>
      {addCalender && <AddMovie addCalendar={setAddCalendar}></AddMovie>}
    </Wrapper>
  );
}

const Wrapper = MuiStyled("div")({
  width: "100%",
});

const YearDate = MuiStyled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  color: "white",
  fontSize: 32,
  marginBottom: 20,
});

const WeekContainer = MuiStyled("div")({
  backgroundColor: "rgb(24, 24, 24)",
});

const DaysList = MuiStyled(Container)({
  display: "grid",
  color: "white",
  gridTemplateColumns: "repeat(7, 1fr)",
  padding: "20px 0 ",
});

const SubTitle = MuiStyled("div")({
  display: "flex",
  justifyContent: "center",
  "&:first-of-type": {
    color: "#ff3d3d",
  },
  "&:last-of-type": {
    color: "#3d77ff",
  },
});
