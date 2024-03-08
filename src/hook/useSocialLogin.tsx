import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import { login } from "@/store/modules/userSlice";

const TOKEN_URL = process.env.NEXT_PUBLIC_KAKAO_TOKEN_URL;
const ACCESS_URL = process.env.NEXT_PUBLIC_KAKAO_ACCESS_URL;
const ME = process.env.NEXT_PUBLIC_KAKAO_ME;

const headerOption = (token?: string) => {
  if (token)
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };

  return {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };
};

export default function useSocialLogin() {
  const dispatch = useAppDispatch();

  const code = new URL(document.location.toString()).searchParams.get("code");

  const loginInfo = (id: string, nickname: string, image: string) => {
    dispatch(login({ id, nickname, image }));
  };

  const kakaoUserToken = () => {
    console.log(TOKEN_URL);
    if (!TOKEN_URL) return console.log("일치하는 URL이 없습니다.");
    // window.location.href = TOKEN_URL;
  };

  const kakaoUserInfoCode = () => {
    if (!ACCESS_URL || !ME) return console.log("서버 에러입니다.");
    axios
      .post(`${ACCESS_URL}${code}`, {}, headerOption())
      .then((res: any) => {
        const { access_token } = res.data;
        axios.post(ME, {}, headerOption(access_token)).then((res: any) => {
          const { id, properties } = res.data;
          loginInfo(id, properties.nickname, properties.thumb_image);
        });
      })
      .catch((Error: any) => {
        console.log(Error);
      });
  };

  return { kakaoUserToken, kakaoUserInfoCode, code };
}
