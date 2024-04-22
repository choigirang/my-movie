"use client";

import Link from "next/link";
import { useState } from "react";

import useSize from "../../hook/useSize";
import Image from "next/image";
import { ArrowRightCircleIcon, Bars3Icon } from "@heroicons/react/16/solid";

export default function Category() {
  const [showNav, setShowNav] = useState(false);
  const { isMobile } = useSize();
  const [showLogout, setShowLogout] = useState(false);

  // const loginUser = (
  //   <div
  //     className="relative"
  //     onMouseEnter={() => setShowLogout(true)}
  //     onMouseLeave={() => setShowLogout(false)}
  //   >
  //     <Image
  //       width={30}
  //       height={30}
  //       src={user?.user?.image!}
  //       alt="로그인 이미지"
  //       className="rounded-[50%] transition-custom"
  //       style={{ opacity: showLogout ? 1 : 0 }}
  //     />
  //     <div
  //       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[30px] flex justify-center items-center rounded bg-white cursor-pointer"
  //       style={{ opacity: showLogout ? 0 : 1 }}
  //       onClick={() => {
  //         signOut();
  //         alert("로그아웃 되었습니다.");
  //       }}
  //     >
  //       로그아웃
  //     </div>
  //   </div>
  // );

  /** 모바일 사이즈 */

  const handleNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      {isMobile && !showNav && (
        <Bars3Icon
          width={32}
          height={32}
          onClick={handleNav}
          className="hover:cursor-pointer hover:text-yellow-400"
        />
      )}
      <ul className="flex gap-10 transition-custom text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/calendar">Calendar</Link>
        </li>
        {/* {!user ? (
          <Link href="/my" key="로그인">
            My
          </Link>
        ) : (
          loginUser
        )} */}
        {isMobile && (
          <ArrowRightCircleIcon
            className="absolute top-1/2 left-[10%] -translate-x-1/2 hover:text-yellow-600 hover:cursor-pointer"
            width={32}
            height={32}
            onClick={handleNav}
            onTouchStart={handleNav}
          />
        )}
      </ul>
    </>
  );
}
