import { api } from "../api/api";
import { MovieDetailType } from "@/type/movie";
import MovieInfo from "./movieInfo";
import MoreMovie from "./moreMovie";

async function getMovie() {
  const res = await api.get("movie/popular", { params: { page: 1 } });

  return res.data;
}

export default async function MovieList() {
  const movies = await getMovie();

  return (
    <>
      <ul className="w-full grid grid-cols-4 place-items-center sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-3">
        {movies.results.map((movie: MovieDetailType) => (
          // <div>{movie.title}</div>
          <MovieInfo key={movie.id} {...movie} />
        ))}
        <MoreMovie />
      </ul>
    </>
  );
}
