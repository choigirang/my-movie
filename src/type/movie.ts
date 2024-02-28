import { Dispatch, RefObject, SetStateAction } from "react";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "react-query";

export interface MovieDetailType extends SelectMovieData {
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
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
};

export interface SelectMovieData {
  id: number | undefined;
  title: string | undefined;
  genre_ids: Array<number> | undefined;
}
