import React, { FormEvent, useEffect, useState } from "react";

import useInputs from "@/hook/useInputs";
import useMovieData from "@/hook/useMovieData";
import SearchResults from "./SearchResults";

import { styled as MuiStyled } from "@mui/material";
import { Button } from "@mui/material";

/**
 * AddMovie에서 영화 검색
 * @returns 검색 input & SearchResults
 */
export default function SearchMovie() {
  const [showResult, setShowResult] = useState(false);
  const [keyword, setKeyword] = useInputs("");
  const [apiKeyword, setApiKeyword] = useState<string | number>("");
  const { data, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovieData(apiKeyword);

  useEffect(() => {
    if (apiKeyword !== keyword) setShowResult(false);
  }, [apiKeyword, keyword]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiKeyword(keyword);
    refetch();
    setShowResult((prev) => !prev);
  };

  const props = {
    keyword,
    apiKeyword,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    setShowResult,
  };

  return (
    <Wrapper onSubmit={(e) => handleSubmit(e)}>
      <InputWithData>
        <Input aria-label="search-movie" onChange={setKeyword} />
        {showResult && <SearchResults {...props} />}
      </InputWithData>
      <Btn type="submit">
        <span>검색</span>
      </Btn>
    </Wrapper>
  );
}

const Wrapper = MuiStyled("form")({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  padding: "20px",
  width: "100%",
});

const InputWithData = MuiStyled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
});

const Btn = MuiStyled(Button)({
  width: "100%",
  maxWidth: 100,
  height: 50,
  display: "flex",

  span: {
    width: "100%",
  },
});

const Input = MuiStyled("input")({
  width: "100%",
  height: 50,
  paddingLeft: 20,
  backgroundColor: "rgba(255,255,255,0.8)",
  borderRadius: 5,

  "&:focus": {
    backgroundColor: "white",
    outlinke: "none",
  },
});
