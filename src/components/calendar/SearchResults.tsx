import { MovieDetailType, SearchResultsProps } from "@/type/movie";
import React from "react";
import { styled as MuiStyled } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import { RootState, wrapper } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/hook/useRedux";
import { saveSelectMovie } from "@/store/modules/selectData";

export default function SearchResults(props: SearchResultsProps) {
  const { id, title, genre_ids } = useAppSelector((state) => state.movieSlice);
  const dispatch = useAppDispatch();
  const selectMovie = useAppSelector((state: RootState) => state.movieSlice);

  return (
    <React.Fragment>
      {/* 검색 중일 시 숨기기 */}
      {props.keyword === props.apiKeyword && (
        <DataBox>
          {/* 데이터 매핑 */}
          {props.data &&
            props.data.pages.map((page) =>
              page.map((movie) => (
                <PrevData
                  key={movie.id}
                  onClick={() =>
                    dispatch(
                      saveSelectMovie({
                        id: movie.id,
                        title: movie.title,
                        genre_ids: movie.genre_ids,
                      })
                    )
                  }
                >
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
