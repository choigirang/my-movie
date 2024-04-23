"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import useSize from "../../hook/useSize";
import Image from "next/image";
import { ArrowRightCircleIcon, Bars3Icon } from "@heroicons/react/16/solid";
import { signOut, useSession } from "next-auth/react";

export default function Category() {
  const [showNav, setShowNav] = useState(false);
  const { data: user } = useSession();
  const { isMobile } = useSize();
  const [showLogout, setShowLogout] = useState(false);

  const userImage = user?.user?.image;

  const loginUser = (
    <div
      className="relative"
      onMouseEnter={() => setShowLogout(true)}
      onMouseLeave={() => setShowLogout(false)}
    >
      {userImage ? (
        <Image
          width={30}
          height={30}
          src={userImage}
          alt="로그인 이미지"
          className="rounded-[50%] transition-custom"
          style={{ opacity: showLogout ? 0 : 1 }}
        />
      ) : (
        <span className="w-[30px] h-[30px] rounded-[50%] transition-custom bg-slate-500" />
      )}
      {showLogout && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[30px] flex justify-center items-center rounded text-black text-xs bg-white cursor-pointer"
          style={{ opacity: showLogout ? 1 : 0 }}
          onClick={() => {
            signOut();
            alert("로그아웃 되었습니다.");
          }}
        >
          로그아웃
        </div>
      )}
    </div>
  );

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
        <li className="hover:text-yellow-400">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/calendar">Calendar</Link>
        </li>
        {!user && (
          <Link href="/my" key="로그인" className="hover:text-yellow-400">
            My
          </Link>
        )}
        {user && loginUser}
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
