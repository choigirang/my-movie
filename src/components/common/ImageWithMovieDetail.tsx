import React, { useState } from "react";
import Image from "next/image";
import { MoonLoader } from "react-spinners";

import { useAppSelector } from "@/hook/useRedux";
import useResizeDetail from "@/hook/useResizeDetail";
import DetailDes from "./DetailDes";

import { Grid, styled as MuiStyled } from "@mui/material";

/**
 * 선택된 영화 이미지
 * @returns 선택된 영화 이미지와 영화 상세 정보
 */
export default function ImageWithMovieDetail() {
  const [loading, setLoading] = useState(true); // 이미지 로딩 상태
  const selectInfo = useAppSelector((state) => state.movieSlice);

  const { resizeImg } = useResizeDetail();

  // 이미지 로딩 완료 시
  const handleImageLoad = () => {
    setLoading(false);
  };

  const baseUrl = "https://image.tmdb.org/t/p";

  return (
    <React.Fragment>
      {/* 이미지 */}
      <ImageBox item xs>
        {loading && (
          <Spinner>
            <MoonLoader color="#36d7b7" size={50}></MoonLoader>
          </Spinner>
        )}
        <Image
          src={baseUrl + resizeImg().url + selectInfo.poster_path}
          alt="detail-poster"
          width={resizeImg().width}
          height={resizeImg().height}
          onLoad={handleImageLoad} // 이미지 로딩 완료 시 호출될 콜백 함수 지정
          priority
        />
      </ImageBox>
      {/* 영화 상세 설명 */}
      <DetailDes {...selectInfo} />
    </React.Fragment>
  );
}

const ImageBox = MuiStyled(Grid)({
  position: "relative",
  alignItems: "center",
  justifyContent: "center",

  img: {
    borderRadius: 10,
  },
});

const Spinner = MuiStyled("div")({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
});
