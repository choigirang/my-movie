import { useAppDispatch } from "@/hook/useRedux";
import useSocialLogin from "@/hook/useSocialLogin";
import { login } from "@/store/modules/userSlice";
import { styled } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

export default function oauth() {
  const dispatch = useAppDispatch();
  const {kakaoUserInfoCode} = useSocialLogin()

  useEffect(() => {
    kakaoUserInfoCode()
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
