import Header from "@/components/common/Header";
import { useThemeHandler } from "@/util/useColorMode";
import { Button, styled as MuiStyled, useColorScheme } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const { toggleColorMode } = useThemeHandler();

  return (
    <>
      <Head>
        <title>나의 영화 일지</title>
        <meta name="description" content="영화 일기장" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Button onClick={toggleColorMode}></Button> */}
      <Container>
        <Header></Header>
      </Container>
    </>
  );
}

const Container = MuiStyled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
