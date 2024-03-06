import { Dispatch, RefObject, SetStateAction } from "react";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "react-query";

export interface SelectMovieData {
  id: number | undefined;
  title: string | undefined;
  original_title: string;
  genre_ids: Array<number> | undefined;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  date: string;
}

export type SaveMovieInfo = Omit<SelectMovieData, "date">;

export type SavedMovieData = {
  [key: string]: Array<SaveMovieInfo>;
};

export interface MovieDetailType extends SelectMovieData {
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

export interface MovieInfoProps extends MovieDetailType {
  setDetailData: Dispatch<SetStateAction<undefined | MovieDetailType>>;
}

export type SearchResultsProps = {
  keyword: string | number;
  apiKeyword: string | number;
  data: InfiniteData<MovieDetailType[]> | undefined;
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  isFetchingNextPage: boolean;
  setShowResult: Dispatch<SetStateAction<boolean>>;
};
