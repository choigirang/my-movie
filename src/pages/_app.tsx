import { ColorModeProvider, useColorMode } from "@/hook/useColorMode";
import "@/styles/globals.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createCustomTheme } from "@/styles/theme";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        {/* <ColorModeProvider> */}
        <ThemeProvider theme={createCustomTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </ColorModeProvider> */}
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}
