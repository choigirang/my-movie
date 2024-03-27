/**
 *
 * @returns 상단 이동 hooks
 */
export default function useMoveScroll() {
  const scrollToTop = () => {
    return window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return { scrollToTop };
}
