import { MovieDetailType, SearchResultsProps } from "@/type/movie";
import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { InfiniteData } from "react-query";
import { styled as MuiStyled } from "@mui/material";

export default function SearchResults(props: SearchResultsProps) {
  const [prevEls, setPrevEls] = useState<ReactNode[]>([]);
  const prevEl = useRef<HTMLLIElement>(null);
  const { keyword, apiKeyword, observe, data } = props;

  useEffect(() => {
    if (keyword !== apiKeyword) {
      prevEl.current && prevEl.current.remove();
    }

    // data가 변경될 때마다 PrevData 요소들을 추적하여 상태 업데이트
    if (data) {
    }
  }, [data, keyword, apiKeyword]);
  return (
    <DataBox>
      {...prevEls}
      {/* <PrevData ref={observe}>더 보기</PrevData> */}
    </DataBox>
  );
}

const DataBox = MuiStyled("ul")({
  width: "inherit",
  height: 290,
  position: "absolute",
  left: 0,
  top: 50,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  overflow: "scroll",
  gap: 10,
});

const PrevData = MuiStyled("li")({
  width: "100%",
  height: 10,
});
