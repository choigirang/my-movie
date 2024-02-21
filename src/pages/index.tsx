import Header from "@/components/common/Header";
import { Button, useColorScheme } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to avoid layout shift, render a placeholder button
    return <Button variant="outlined" color="error" sx={{ width: 120 }} />;
  }

  return (
    <>
      <Head>
        <title>나의 영화 일지</title>
        <meta name="description" content="영화 일기장" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
        {mode === "dark" ? "Turn light" : "Turn dark"}
      </Button>
      <Header></Header>
    </>
  );
}
