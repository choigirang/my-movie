import React from "react";

import AddCalendarBtn from "./AddCalendarBtn";
import { useAppSelector } from "@/hook/useRedux";
import { StarIcon } from "@heroicons/react/16/solid";

/**
 * 선택된 영화 보여줄 컴포넌트
 * @returns 영화 상세 정보
 */
export default function DetailDes() {
  const seletedMovie = useAppSelector((state) => state.movieSlice);

  return (
    <div className="flex flex-col justify-start items-start relative text-white py-[50px] gap-[20px]">
      {/* 타이틀 */}
      <div className="flex items-end gap-2">
        <h2 className="text-3xl font-bold">{seletedMovie.title}</h2>
        <h3 className="text-2xl text-[rgba(255,255,255,0.7)]">
          {seletedMovie.original_title}
        </h3>
      </div>
      {/* 개봉일 */}
      <span className="text-xl text-[rgba(255,255,255,0.7)]">
        {seletedMovie.release_date}
      </span>
      {/* 별점 */}
      <div className="flex text-2xl gap-[3px] text-white">
        <StarIcon width={24} height={24}></StarIcon>
        <span>{seletedMovie.vote_average.toFixed(1)}</span>
      </div>
      {/* 설명 */}
      <div className="w-full h-[200px] text-wrap overflow-scroll text-xl text-[rgba(255,255,255,0.7)]">
        {seletedMovie.overview}
      </div>
      {/* 캘린더 추가 */}
      <AddCalendarBtn />
    </div>
  );
}
