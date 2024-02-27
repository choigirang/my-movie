import { MovieDetailType, MovieInfoProps } from "@/type/movie";
import { Button, Grid, styled as MuiStyled } from "@mui/material";
import React, { EventHandler, useState } from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import { ClipLoader, MoonLoader, PropagateLoader } from "react-spinners";
import DetailDes from "./DetailDes";
import ClearIcon from "@mui/icons-material/Clear";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";

export default function MovieDetail(movieDetail: MovieInfoProps) {
  const [loading, setLoading] = useState(true); // 이미지 로딩 상태

  const baseUrl = "https://image.tmdb.org/t/p";

  // 이미지 로딩 완료 시
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <AlertBg setState={movieDetail.setDetailData}>
      <Alert setState={movieDetail.setDetailData}>
        {/* 이미지 */}
        <ImageBox item xs>
          {loading && (
            <Spinner>
              <MoonLoader color="#36d7b7" size={50}></MoonLoader>
            </Spinner>
          )}
          <Image
            src={baseUrl + "/w400" + movieDetail.poster_path}
            alt="detail-poster"
            width={400}
            height={600}
            onLoad={handleImageLoad} // 이미지 로딩 완료 시 호출될 콜백 함수 지정
            priority
          />
        </ImageBox>
        {/* 영화 상세 설명 */}
        <DetailDes {...movieDetail} />
      </Alert>
    </AlertBg>
  );
}

const ImageBox = MuiStyled(Grid)({
  position: "relative",
  display: "flex",
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
