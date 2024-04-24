/** 2024/04/04 - 스크롤 훅 */
export default function useScroll() {
  const scrollToTop = () => {
    return window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToPage = (url: string) => {
    document.getElementById(url)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return { scrollToTop, scrollToPage };
}
