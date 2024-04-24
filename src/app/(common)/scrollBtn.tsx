"use client";

import React from "react";

import useScroll from "@/hook/useScroll";
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";

export default function ScrollBtn() {
  const { scrollToTop } = useScroll();

  return (
    <ArrowUpCircleIcon
      width={32}
      height={32}
      className="fixed flex mx-auto bottom-[20px] right-[20px] cursor-pointer text-white transition-custom hover:scale-150"
      onClick={() => scrollToTop()}
    />
  );
}
