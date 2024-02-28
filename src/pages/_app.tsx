import { ColorModeProvider, useColorMode } from "@/hook/useColorMode";
import "@/styles/globals.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { createCustomTheme } from "@/styles/theme";
import PropTypes from "prop-types";
import { wrapper } from "@/store/store";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  const theme = createCustomTheme();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AppRouterCacheProvider> */}
      <StyledEngineProvider injectFirst>
        {/* <ColorModeProvider> */}
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        {/* </ColorModeProvider> */}
      </StyledEngineProvider>
      {/* </AppRouterCacheProvider> */}
    </QueryClientProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
