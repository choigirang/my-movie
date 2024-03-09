import useSocialLogin from "@/hook/useSocialLogin";
import { Button, Container, styled as MuiStyled } from "@mui/material";
import React, { useEffect } from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const loginBtn = {
  google: {
    icon: <FaGooglePlusSquare />,
    title: "구글 로그인",
    color: "#F95D5E",
  },
  kakao: {
    icon: <RiKakaoTalkFill />,
    title: "카카오톡 로그인",
    color: "#FFEC1F",
  },
  github: { icon: <FaGithub />, title: "깃헙 로그인", color: "#2b2b2b" },
};

export default function index() {
  const { kakaoUserToken } = useSocialLogin();

  return (
    <Wrapper>
      {Object.entries(loginBtn).map((each) => (
        <Btn
          key={each[0]}
          style={{ backgroundColor: `${each[1].color}` }}
          //   onClick={() => kakaoUserToken()}
          onClick={() => kakaoUserToken()}
        >
          {each[1].icon}
          <span>{each[1].title}</span>
        </Btn>
      ))}
    </Wrapper>
  );
}

const Wrapper = MuiStyled(Container)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});

const Btn = MuiStyled(Button)({
  width: "100%",
  maxWidth: 300,
  fontWeight: "700",
  padding: "20px 40px",
  display: "grid",
  gridTemplateColumns: "20% 80%",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  color: "black",
});
