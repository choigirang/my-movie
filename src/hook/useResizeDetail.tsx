import React, { useEffect, useState } from "react";

export default function useResizeDetail() {
  const [resizeWithUrl, setResizeWithUrl] = useState(false);

  useEffect(() => {
    if (window.location.pathname) setResizeWithUrl(true);
    else setResizeWithUrl(false);
  }, []);

  const resizeImg = () => {
    if (resizeWithUrl) return { width: 300, height: 450, url: "/w300" };
    else return { width: 400, height: 600, url: "/w400" };
  };

  return { resizeImg };
}
