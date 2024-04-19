"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Social {
  icon: JSX.Element;
  title: string;
  color: string;
  sign: string;
}

export default function LoginBtn(social: Social) {
  const [hover, setHover] = useState(false);
  const { data } = useSession();

  //   useEffect(() => {
  //     if (data !== null) window.location.href = "/";
  //   }, [data]);

  return (
    <button
      className="w-full max-w-[300px] grid grid-cols-loginBtn place-items-center items-center font-bold text-black px-5 py-10 rounded transition-custom"
      style={{ backgroundColor: hover ? "white" : social.color }}
      onClick={() => signIn(social.sign)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {social.icon}
      <span>{social.title}</span>
    </button>
  );
}
