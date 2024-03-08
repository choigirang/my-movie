import { MovieDetailType } from "@/type/movie";
import React, { EventHandler, SetStateAction, useState } from "react";
import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import ImageWithMovieDetail from "../common/ImageWithMovieDetail";
import { useAppSelector } from "@/hook/useRedux";

export default function MovieDetail() {
  const selectedMovie = useAppSelector((state) => state.movieSlice);

  return (
    <React.Fragment>
      {selectedMovie.title && (
        <AlertBg>
          <Alert>
            <ImageWithMovieDetail />
          </Alert>
        </AlertBg>
      )}
    </React.Fragment>
  );
}
