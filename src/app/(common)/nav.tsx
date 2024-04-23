"use client";

import Link from "next/link";
import Category from "./category";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hook/useRedux";

/** 2024/04/04 - 레이아웃 header 컴포넌트 */
export default function Header() {
  const [scroll, setScroll] = useState(false);
  const selected = useAppSelector((state) => state.movieSlice);

  /** 스크롤 */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setScroll(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${!selected.title || !selected.date ? "nav" : "hideNav"} h-[100px] transition-custom`}
      style={{ background: scroll ? "rgba(0,0,0,0.7)" : "none" }}
    >
      <div className="container h-full flex justify-between items-center pt-0">
        <h1 className="text-3xl text-yellow-400 font-bold">
          <Link href="/" title="Movie" className="font-black">
            My Movie.
          </Link>
        </h1>
        <Category />
      </div>
    </nav>
  );
}
