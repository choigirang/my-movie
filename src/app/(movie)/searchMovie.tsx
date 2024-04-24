import React, { FormEvent, useEffect, useState } from "react";

import useInputs from "@/hook/useInputs";
import useMovieData from "@/hook/useMovieData";
import SearchMovieResults from "./searchMovieResults";

/**
 * AddMovie에서 영화 검색
 * @returns 검색 input & SearchResults
 */
export default function SearchMovie() {
  const [showResult, setShowResult] = useState(false);
  const [keyword, setKeyword, onEnter] = useInputs("");
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
    <form
      className="flex justify-between gap-4 p-5 w-full"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="relative w-full h-full">
        <input
          className="w-full h-[50px] text-stone-900 pl-5 bg-[rgba(255,255,255,0.8)] rounded-md focus:bg-white focus:outline-none"
          aria-label="search-movie"
          onChange={setKeyword}
          onKeyDown={onEnter}
        />
        {showResult && <SearchMovieResults {...props} />}
      </div>
      <button
        className="flex items-center justify-center w-full max-w-[100px] h-[50px] bg-yellow-400 rounded-md hover:bg-yellow-600 transition-custom"
        type="submit"
      >
        <span className="w-full">검색</span>
      </button>
    </form>
  );
}
