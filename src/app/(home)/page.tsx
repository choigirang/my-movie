import { Metadata } from "next";
import MovieList from "./movieList";

export const metadata: Metadata = {
  title: "나의 영화 일지",
  description: "영화 기록하기",
};

export default function Home() {
  return (
    <section className="relative container flex-col justify-between pt-32">
      <MovieList />
    </section>
  );
}
