import { MovieDetailType, MovieInfoProps } from "@/type/movie";
import { Button, Grid, styled as MuiStyled } from "@mui/material";
import React, { EventHandler, useState } from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import { ClipLoader, MoonLoader, PropagateLoader } from "react-spinners";
import DetailDes from "./DetailDes";
import ClearIcon from "@mui/icons-material/Clear";

export default function MovieDetail(movieDetail: MovieInfoProps) {
  const [loading, setLoading] = useState(true); // 이미지 로딩 상태

  const baseUrl = "https://image.tmdb.org/t/p";

  // 이미지 로딩 완료 시
  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Bg onClick={() => movieDetail.setDetailData(undefined)}>
      <GridCustom
        container
        spacing={1200 <= window.innerWidth ? 2 : 1}
        columnSpacing={1200 <= window.innerWidth ? 1 : 2}
        onClick={(e) => e.stopPropagation()}
      >
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
        {/* 닫기 버튼 */}
        <CloseBtn
          startIcon={<ClearIcon />}
          onClick={() => movieDetail.setDetailData(undefined)}
        />
      </GridCustom>
    </Bg>
  );
}

const Bg = MuiStyled("div")(({}) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 999,
}));

const GridCustom = MuiStyled(Grid)({
  flexDirection: "row",
  width: "70%",
  height: "90%",
  display: "flex",
  backgroundColor: "rgba(24, 24, 24, 0.983)",
  borderRadius: "10px",
  position: "relative",

  /* 타블렛 */
  "@media screen and (min-width: 768px) and (max-width: 1200px)": {
    flexDirection: "column",
    overflow: "scroll",
    gap: 20,
    padding: "20px 0",
    "& > * + *": {
      // 첫 번째 자식 이후의 모든 자식에 대해
      marginTop: 0, // 상단 간격을 없애줌
    },
  },
});

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

const CloseBtn = MuiStyled(Button)({
  position: "absolute",
  top: 0,
  right: 0,
  width: 24,
  height: 30,
  backgroundColor: "rgba(0,0,0,0)",

  span: {
    margin: 0,
  },
});
