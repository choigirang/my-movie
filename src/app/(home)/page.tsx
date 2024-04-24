import { Metadata } from "next";
import { api } from "../api/api";
import MoreMovie from "./moreMovie";
import { MovieDetailType } from "@/type/movie";
import MovieInfo from "./movieInfo";
import { getMetadata } from "@/constant/metaData";

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata();
};

async function getMovie() {
  const res = await api.get("movie/popular", { params: { page: 1 } });

  return res.data;
}

export default async function Home() {
  const movies = await getMovie();

  return (
    <section className="relative container flex-col justify-between pt-32">
      <ul className="w-full grid grid-cols-4 place-items-center gap-5 sm:grid-rows-1 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-3">
        {movies.results.map((movie: MovieDetailType) => (
          <MovieInfo key={movie.id} {...movie} />
        ))}
        <MoreMovie />
      </ul>
    </section>
  );
}
