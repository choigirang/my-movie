import { Button, styled as MuiStyled } from "@mui/material";
import React from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import Link from "next/link";

export default function AddCalendarBtn() {
  return (
    <Container>
      <Link href={"/calendar"}>
        <Button startIcon={<EditCalendarIcon />} variant="contained">
          캘린더 추가
        </Button>
      </Link>
    </Container>
  );
}

const Container = MuiStyled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
