import React from "react";

import { useAppSelector } from "@/hook/useRedux";
import ImageWithMovieDetail from "./imgWithMovie";

/**
 * redux에 저장된 영화 데이터
 * @returns 선택된 영화 데이터 정보
 */
export default function SelectMovieData() {
  const selectedMovieData = useAppSelector((state) => state.movieSlice);

  return (
    <ul className="flex justify-center items-center">
      <li>
        {selectedMovieData.title && (
          <ImageWithMovieDetail {...selectedMovieData} />
        )}
      </li>
    </ul>
  );
}
