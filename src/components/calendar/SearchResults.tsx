import { MovieDetailType, SearchResultsProps } from "@/type/movie";
import React from "react";
import { styled as MuiStyled } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { selectMovie } from "@/store/modules/movieSelectSlice";

export default function SearchResults(props: SearchResultsProps) {
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
        <DataBox>
          {/* 데이터 매핑 */}
          {props.data &&
            props.data.pages.map((page) =>
              page.map((movie) => (
                <PrevData key={movie.id} onClick={() => handleDispatch(movie)}>
                  {movie.title}
                </PrevData>
              ))
            )}
          {props.keyword === "" && <PrevData>검색어를 입력해주세요.</PrevData>}
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
            <PrevData onClick={() => props.fetchNextPage()}>
              ...더 보기
            </PrevData>
          )}
        </DataBox>
      )}
    </React.Fragment>
  );
}

const DataBox = MuiStyled("ul")({
  width: "calc(100% - 10px)",
  maxHeight: 280,
  position: "absolute",
  left: "50%",
  top: 50,
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  overflow: "scroll",
  gap: 10,
  borderBottomLeftRadius: "5px 5px",
  borderBottomRightRadius: "5px 5px",
  zIndex: 999,
});

const PrevData = MuiStyled("li")({
  width: "100%",
  padding: 10,
  fontSize: 12,

  "&:hover": {
    backgroundColor: "#b8b8b8",
    cursor: "pointer",
  },
});
