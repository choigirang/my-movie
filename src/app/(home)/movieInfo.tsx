import { MovieDetailType } from "@/type/movie";
import { StarIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import HandleSetMovie from "./handleSetMovie";

/**
 *
 * @param movie MovieList의 영화 데이터
 * @returns MovieList의 매핑된 영화 데이터
 */
export default function MovieInfo(movie: MovieDetailType) {
  return (
    // HOC client for dispatch (HandleSetMovie)
    <HandleSetMovie movie={movie}>
      <Link href={`/calendar`} aria-label="add-movie-link">
        {/* icon of average */}
        <div className="flex gap-1 absolute top-[10px] left-[10px] items-center p-1 text-[12px] leading-3 text-white bg-[rgba(0,0,0,0.9)] rounded">
          <StarIcon
            width={12}
            height={12}
            className="text-yellow-400"
          ></StarIcon>
          <span>{Number(movie.vote_average.toFixed(1))}</span>
        </div>

        {/* title & description */}
        <div className="flex flex-col gap-3 p-3 pt-10 w-full h-[300px] absolute top-0 left-0 text-white transition-custom opacity-0 hover:opacity-100">
          <h2 className="w-full truncate">{movie.title}</h2>
          <p className="h-[200px] overflow-scroll text-left text-sm">
            {movie.overview}
          </p>
        </div>
      </Link>
    </HandleSetMovie>
  );
}
