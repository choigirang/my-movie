import React from "react";
import { PropagateLoader } from "react-spinners";

import { useAppDispatch } from "@/hook/useRedux";
import { selectMovie } from "@/store/modules/movieSelectSlice";
import { MovieDetailType, SearchResultsProps } from "@/type/movie";

/**
 * AddMovie의 영화 검색 결과
 * @param props SearchMovie의 data
 * @returns 영화 데이터(무한 스크롤)
 */
export default function SearchMovieResults(props: SearchResultsProps) {
  const dispatch = useAppDispatch();

  const handleDispatch = (movie: MovieDetailType) => {
    dispatch(
      selectMovie({
        ...movie,
      })
    );
    // 미리보기 닫기
    props.setShowResult(false);
  };

  return (
    <React.Fragment>
      {/* 검색 중일 시 숨기기 */}
      {props.keyword === props.apiKeyword && (
        <ul className="absolute left-1/2 top-[50px] w-[calc(100% - 10px)] max-h-[280px] -traslate-y-1/2 flex flex-col bg-white overflow-scroll gap-[10px] rounded-l-[5px] rounded-r-[5px] z-[100]">
          {/* 데이터 매핑 */}
          {props.data &&
            props.data.pages.map((page) =>
              page.map((movie) => (
                <li
                  className="w-full p-[10px] text-xs hover:bg-[#b8b8b8] cursor-pointer"
                  key={movie.id}
                  onClick={() => handleDispatch(movie)}
                >
                  {movie.title}
                </li>
              ))
            )}
          {props.keyword === "" && (
            <li className="w-full p-[10px] text-xs hover:bg-[#b8b8b8] cursor-pointer">
              검색어를 입력해주세요.
            </li>
          )}
          {/* 스피너 */}
          {props.isFetchingNextPage && (
            <PropagateLoader
              loading={props.isFetchingNextPage}
              size={100}
              cssOverride={{ display: "flex", margin: "0 auto" }}
            />
          )}
          {/* 더 보기 있을 시 */}
          {props.hasNextPage && (
            <li
              className="w-full p-[10px] text-xs hover:bg-[#b8b8b8] cursor-pointer"
              onClick={() => props.fetchNextPage()}
            >
              ...더 보기
            </li>
          )}
        </ul>
      )}
    </React.Fragment>
  );
}
