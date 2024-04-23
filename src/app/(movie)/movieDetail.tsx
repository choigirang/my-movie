import React from "react";

import { useAppSelector } from "@/hook/useRedux";
import { StarIcon } from "@heroicons/react/16/solid";
import AddMovieToCalendar from "./addMovieToCalendar";

/**
 * 선택된 영화 보여줄 컴포넌트
 * @returns 영화 상세 정보
 */
export default function MovieDetail() {
  const seletedMovie = useAppSelector((state) => state.movieSlice);

  return (
    <div className="flex flex-col justify-start items-start relative text-white p-5 gap-3">
      {/* 타이틀 */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold">{seletedMovie.title}</h2>
        <h3 className="text-xl text-[rgba(255,255,255,0.7)]">
          {seletedMovie.original_title}
        </h3>
      </div>
      {/* 개봉일 */}
      <span className="text-lg text-white">{seletedMovie.release_date}</span>
      {/* 별점 */}
      <div className="flex items-center text-lg gap-[3px] text-white">
        <StarIcon width={16} height={16} className="text-yellow-400" />
        <span>{seletedMovie.vote_average.toFixed(1)}</span>
      </div>
      {/* 설명 */}
      <div className="w-full h-[200px] text-left text-wrap overflow-scroll text-md text-[rgba(255,255,255,0.7)]">
        {seletedMovie.overview}
      </div>
      {/* 캘린더 추가 */}
      <AddMovieToCalendar />
    </div>
  );
}
