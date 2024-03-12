import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { Button, styled as MuiStyled } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { LoginInitial, logout } from "@/store/modules/userSlice";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

export default function Category() {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useAppDispatch();
  const { data: user } = useSession();
  console.log(user);

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

  return (
    <Container>
      <PageLink href="/" key="홈">
        홈
      </PageLink>
      <PageLink href="/calendar" key="캘린더">
        캘린더
      </PageLink>
      {!user ? (
        <PageLink href="/my" key="로그인">
          로그인
        </PageLink>
      ) : (
        loginUser
      )}
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
