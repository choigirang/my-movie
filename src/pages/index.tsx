import Head from "next/head";
import MovieList from "@/components/home/MovieList";
import useMoveScroll from "@/hook/useScrollTop";

import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import { Container, styled } from "@mui/material";

export default function Home() {
  // const { toggleColorMode } = useThemeHandler();
  const { scrollToTop } = useMoveScroll();

  return (
    <>
      <Head>
        <title>나의 영화 일지</title>
        <meta name="description" content="영화 일기장" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Button onClick={toggleColorMode}></Button> */}
      <MuiContainer>
        <MovieList />
      </MuiContainer>
      <ArrowCircleLeftSharpIcon
        onClick={() => scrollToTop()}
        sx={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, -50%) rotate(90deg)",
          display: "flex",
          margin: "0 auto",
          fill: "white",
          fontSize: 50,
          zIndex: 998,
          "&:hover": {
            cursor: "pointer",
            transition: "all .3s",
          },
        }}
      />
    </>
  );
}

const MuiContainer = styled(Container)({});
