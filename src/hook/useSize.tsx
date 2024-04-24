import { useEffect, useState } from "react";

/** 2024/04/14 - 화면에 따른 mobile 훅 */
export default function useSize() {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobile = width < 640;
      const isTablet = width >= 641 && width <= 1024;

      setMobile(isMobile);
      setTablet(isTablet);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet };
}
