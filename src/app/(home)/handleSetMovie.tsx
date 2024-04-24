"use client";

import { useAppDispatch } from "@/hook/useRedux";
import { selectMovie } from "@/store/modules/movieSelectSlice";
import { MovieDetailType } from "@/type/movie";
import Image from "next/image";
import { useState } from "react";

interface MovieProps {
  movie: MovieDetailType;
  children: React.ReactNode;
}

const baseUrl = "https://image.tmdb.org/t/p/w200";

export default function HandleSetMovie(child: MovieProps) {
  const [mouse, setMouse] = useState(false);
  const dispatch = useAppDispatch();
  const { movie, children } = child;

  const mouseHandler = () => {
    setMouse((prev) => !prev);
  };

  return (
    <li
      className="relative w-[200px] cursor-pointer"
      onClick={() => dispatch(selectMovie({ ...movie }))}
      onMouseEnter={mouseHandler}
      onMouseLeave={mouseHandler}
    >
      {/* 영화 이미지 */}
      <div className="w-auto h-auto max-w-[200px] max-h-[300px] flex cursor-pointer">
        <Image
          src={baseUrl + movie.poster_path}
          alt="poster"
          width={200}
          height={300}
          className="rounded-[10px] transition-custom"
          style={{ opacity: mouse ? 0.1 : 1 }}
          priority
        />
      </div>
      {children}
    </li>
  );
}
