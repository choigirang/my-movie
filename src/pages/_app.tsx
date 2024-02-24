import { ColorModeProvider, theme, useColorMode } from "@/util/useColorMode";
import "@/styles/globals.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useMemo } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider options={{ enableCssLayer: true }} {...pageProps}>
        {/* <ColorModeProvider> */}
          {/* <ThemeProvider theme={theme}> */}
            <Component {...pageProps} />
          {/* </ThemeProvider> */}
        {/* </ColorModeProvider> */}
      </AppRouterCacheProvider>
    </StyledEngineProvider>
  );
}
