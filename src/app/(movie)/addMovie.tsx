import React from "react";

import { resetSelect } from "@/store/modules/movieSelectSlice";
import { useAppDispatch } from "@/hook/useRedux";
import { AlertProps } from "@/type/common";
import { XMarkIcon } from "@heroicons/react/16/solid";

/**
 *
 * @param param AlertBg > Alert > 들어올 chidren
 * @returns 닫기 버튼과 배경
 */
export default function AddMovie({ children }: AlertProps) {
  const dispatch = useAppDispatch();
  const path = window.location.pathname === "/calendar";

  const resetAlertWithMovieData = () => {
    dispatch(resetSelect());
  };

  return (
    <div
      className="relative flex flex-col max-w-[800px] w-[70%] h-[90%] gap-5 bg-[rgb(24,24,24)] rounded-xl p-5"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      {/* 닫기 버튼 */}
      <button onClick={resetAlertWithMovieData}>
        <XMarkIcon
          className="absolute right-5 top-0 text-black m-0"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
