"use client";

import Link from "next/link";
import { useState } from "react";

import { FaChevronCircleRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { styled as MuiStyled } from "@mui/material";
import useSize from "../../hook/useSize";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Category() {
  const [showNav, setShowNav] = useState(false);
  const { isMobile } = useSize();
  const [showLogout, setShowLogout] = useState(false);
  const { data: user } = useSession();

  const loginUser = (
    <Profile
      onMouseEnter={() => setShowLogout(true)}
      onMouseLeave={() => setShowLogout(false)}
    >
      <ProfileImg
        width={30}
        height={30}
        src={user?.user?.image!}
        alt="로그인 이미지"
        $showimg={showLogout ? 1 : 0}
      />
      <LogoutBtn
        $showbtn={showLogout}
        onClick={() => {
          signOut();
          alert("로그아웃 되었습니다.");
        }}
      >
        로그아웃
      </LogoutBtn>
    </Profile>
  );

  /** 모바일 사이즈 */

  const handleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      {isMobile && !showNav && (
        <IoMdMenu
          width={32}
          height={32}
          onClick={handleNav}
          className="hover:cursor-pointer hover:text-yellow-400"
        />
      )}
      <Container className="flex gap-10 transition-custom">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        <li>
          <Link href="/my">My</Link>
        </li>
        {isMobile && (
          <FaChevronCircleRight
            className="absolute top-1/2 left-[10%] -translate-x-1/2 hover:text-yellow-600 hover:cursor-pointer"
            width={32}
            height={32}
            onClick={handleNav}
            onTouchStart={handleNav}
          />
        )}
      </Container>
    </>
  );
}

const Container = MuiStyled("ul")({
  width: 300,
  display: "flex",
  justifyContent: "space-around",
});

const PageLink = MuiStyled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
}));

const Profile = MuiStyled("div")({
  position: "relative",
});

const LogoutBtn = MuiStyled("div")<{ $showbtn: boolean }>(({ $showbtn }) => ({
  width: 70,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  borderRadius: 5,
  backgroundColor: "white",
  opacity: $showbtn ? 1 : 0,

  "&:hover": {
    cursor: "pointer",
  },
}));

const ProfileImg = MuiStyled(Image)<{ $showimg: number }>(({ $showimg }) => ({
  borderRadius: "50%",
  opacity: $showimg ? 0 : 1,
  transition: "all .3s",
}));
