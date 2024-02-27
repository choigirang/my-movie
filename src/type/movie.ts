import { Dispatch, RefObject, SetStateAction } from "react";
import { InfiniteData } from "react-query";

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface MovieInfoProps extends MovieDetailType {
  setDetailData: Dispatch<SetStateAction<undefined | MovieDetailType>>;
}

export type SearchResultsProps = {
  keyword: string | number;
  apiKeyword: string | number;
  observe: RefObject<HTMLLIElement>;
  data: InfiniteData<MovieDetailType> | undefined;
};
