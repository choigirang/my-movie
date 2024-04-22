import React, { Dispatch, ReactNode } from "react";

import { useAppDispatch } from "@/hook/useRedux";
import { AlertProps } from "@/type/common";
import { resetSelect } from "@/store/modules/movieSelectSlice";

/**
 * @returns 영화 선택 시 배경
 */
export default function AddMovieBg({ children }: AlertProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="w-full h-full flex justify-center items-center fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50"
      onClick={() => dispatch(resetSelect())}
    >
      {children}
    </div>
  );
}
