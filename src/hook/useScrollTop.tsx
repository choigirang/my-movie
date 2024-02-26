export default function useMoveScroll() {
  const scrollToTop = () => {
    return window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return { scrollToTop };
}
