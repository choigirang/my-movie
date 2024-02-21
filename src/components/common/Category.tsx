import { styled } from "@mui/material";
import Link from "next/link";

const categoryLink = {
  HOME: "/home",
  CALENDAR: "/calendar",
  MY: "/my",
};

export default function Category() {
  return (
    <div className="d-flex align-items-center gap-3">
      {Object.entries(categoryLink).map(([key, value]) => (
        <Link
          href={value}
          key={key}
          className="text-decoration-none text-dark waves-effect waves-light"
        >
          {key}
        </Link>
      ))}
    </div>
  );
}

const PageLink = styled;
