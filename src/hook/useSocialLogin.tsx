import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import { login } from "@/store/modules/userSlice";

const KAKAO_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;
const KAKAO_REDIRECT = process.env.NEXT_PUBLIC_KAKAO_REDIRECT;
const KAKAO_TOKEN_URL = process.env.NEXT_PUBLIC_KAKAO_TOKEN_URL;
const KAKAO_ACCESS_URL = process.env.NEXT_PUBLIC_KAKAO_ACCESS_URL;

export default function useSocialLogin() {
  const dispatch = useAppDispatch();

  const loginInfo = (id: string, nickname: string, image: string) => {
    dispatch(login({ id, nickname, image }));
  };

  const kakaoUserToken = () => {
    if (!KAKAO_TOKEN_URL) return console.log("일치하는 URL이 없습니다.");
    window.location.href = `${KAKAO_TOKEN_URL}&${KAKAO_KEY}&${KAKAO_REDIRECT}`;
  };

  const kakaoUserInfoCode = () => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    if (!KAKAO_ACCESS_URL) return console.log("서버 에러입니다.");
    axios
      .post(
        `${KAKAO_ACCESS_URL}&${KAKAO_KEY}&${KAKAO_REDIRECT}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res: any) => {
        const { access_token } = res.data;
        axios
          .post(
            "https://kapi.kakao.com/v2/user/me",
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res: any) => {
            const { id, properties } = res.data;
            loginInfo(id, properties.nickname, properties.thumbnail_image);
            window.location.href = "/";
          });
      });
  };

  return { kakaoUserToken, kakaoUserInfoCode };
}
