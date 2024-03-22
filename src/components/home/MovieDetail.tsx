import React from "react";

import AlertBg from "../common/AlertBg";
import Alert from "../common/Alert";
import ImageWithMovieDetail from "../common/ImageWithMovieDetail";
import { useAppSelector } from "@/hook/useRedux";

/**
 * @returns /home 화면의 선택된 영화 정보
 */
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
