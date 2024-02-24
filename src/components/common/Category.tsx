import { styled as MuiStyled } from "@mui/material";
import Link from "next/link";

const categoryLink = {
  HOME: "/",
  CALENDAR: "/calendar",
  MY: "/my",
};

export default function Category() {
  return (
    <Container>
      {Object.entries(categoryLink).map(([key, value]) => (
        <PageLink href={value} key={key}>
          {key}
        </PageLink>
      ))}
    </Container>
  );
}

const Container = MuiStyled("div")({
  width: 300,
  display: "flex",
  justifyContent: "space-around",
});

const PageLink = MuiStyled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
}));
