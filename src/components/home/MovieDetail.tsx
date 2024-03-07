import { MovieDetailType, MovieInfoProps } from "@/type/movie";
import React, { EventHandler, useState } from "react";
import Container from "@mui/material/Container";
import DetailDes from "../common/DetailDes";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import ImageWithMovieDetail from "../common/ImageWithMovieDetail";

export default function MovieDetail(movieDetail: MovieInfoProps) {
  return (
    <AlertBg setState={movieDetail.setDetailData}>
      <Alert setState={movieDetail.setDetailData}>
        <ImageWithMovieDetail {...movieDetail} />
      </Alert>
    </AlertBg>
  );
}
