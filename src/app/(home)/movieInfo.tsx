"use client";

import { MovieDetailType } from "@/type/movie";

import { useAppDispatch } from "@/hook/useRedux";
import { selectMovie } from "@/store/modules/movieSelectSlice";
import { StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";
import { RingLoader } from "react-spinners";

const baseUrl = "https://image.tmdb.org/t/p/w200";

/**
 *
 * @param each MovieList의 영화 데이터
 * @returns MovieList의 매핑된 영화 데이터
 */
export default function MovieInfo(each: MovieDetailType) {
  const [mouse, setMouse] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <li
      className="relative w-[200px] py-[20px] cursor-pointer"
      onClick={() => dispatch(selectMovie({ ...each }))}
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
    >
      <div className=" max-w-[200px] max-h-[300px] flex cursor-pointer">
        <Image
          src={baseUrl + each.poster_path}
          alt="poster"
          width={200}
          height={300}
          style={{
            borderRadius: 10,
            opacity: mouse ? 0.5 : 1,
          }}
          priority
        />
        <div className="flex gap-1 absolute top-[10px] left-[10px] items-center p-1 text-[12px] leading-3 text-white bg-[rgba(0,0,0,0.7)] rounded">
          <StarIcon
            width={12}
            height={12}
            className="text-yellow-400"
          ></StarIcon>
          <span>{Number(each.vote_average.toFixed(1))}</span>
        </div>
      </div>
      <h2
        className="max-w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-2xl overflow-hidden text-ellipsis whitespace-nowrap text-center text-white transition-custom"
        style={{ opacity: mouse ? 1 : 0 }}
      >
        {each.title}
      </h2>
    </li>
  );
}
