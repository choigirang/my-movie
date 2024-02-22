import { ColorModeProvider, useThemeHandler } from "@/util/useThemeHandler";
import "@/styles/globals.css";
import { createCustomTheme } from "@/styles/theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider options={{ enableCssLayer: true }} {...pageProps}>
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </AppRouterCacheProvider>
    </StyledEngineProvider>
  );
}
