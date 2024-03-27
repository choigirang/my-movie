import React, { useEffect } from "react";

import useSocialLogin from "@/hook/useSocialLogin";

import { styled } from "@mui/material";

/**
 *
 * @returns login loading page
 */
export default function oauth() {
  const { kakaoUserInfoCode } = useSocialLogin();

  useEffect(() => {
    kakaoUserInfoCode();
  }, []);

  return <Loading>로그인 중입니다.</Loading>;
}

const Loading = styled("div")({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: -1,
  color: "white",
});
