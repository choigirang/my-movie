import { Html, Head, Main, NextScript } from "next/document";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { customtheme } from "@/styles/theme";
import { useColorMode } from "@/hooks/useColorMode";

export default function Document() {
  const { mode } = useColorMode();
  const theme = useMemo(() => customtheme(mode), [mode]);

  return (
    <Html lang="en" data-color-scheme="light">
      <Head />
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Main />
            <NextScript />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </Html>
  );
}
