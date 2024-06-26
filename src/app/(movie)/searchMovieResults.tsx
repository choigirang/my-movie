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
        <ul className="absolute left-0 top-[50px] w-full max-h-[280px] flex flex-col bg-white overflow-scroll gap-[10px] rounded-l-[5px] rounded-r-[5px] z-[100]">
          {/* 데이터 매핑 */}
          {props.data &&
            props.data.pages.map((page) =>
              page.map((movie) => (
                <li
                  className="w-full p-[10px] text-xs text-start text-stone-800 hover:bg-[#b8b8b8] cursor-pointer"
                  key={movie.id}
                  onClick={() => handleDispatch(movie)}
                >
                  {movie.title}
                </li>
              ))
            )}
          {/* 스피너 */}
          {props.isFetchingNextPage && (
            <PropagateLoader
              loading={props.isFetchingNextPage}
              cssOverride={{
                display: "flex",
                margin: "0 auto",
                color: "#ffe100",
              }}
            />
          )}
          {/* 더 보기 있을 시 */}
          {props.hasNextPage && (
            <li
              className="w-full p-[10px] text-xs text-stone-600 hover:bg-[#b8b8b8] cursor-pointer"
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
