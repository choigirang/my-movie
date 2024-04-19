"use client";

import React from "react";

import useScroll from "@/hook/useScroll";
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";

export default function ScrollBtn() {
  const scrollTop = useScroll();

  return (
    <ArrowUpCircleIcon
      width={16}
      height={16}
      className="fixed flex mx-auto bottom-0 left-1/2 -translate-y-1/2 rotate-90 cursor-pointer transition-custom"
      onClick={() => scrollTop}
    />
  );
}
