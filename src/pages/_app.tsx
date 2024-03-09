import { ColorModeProvider, useColorMode } from "@/hook/useColorMode";
import "@/styles/globals.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { createCustomTheme } from "@/styles/theme";
import PropTypes from "prop-types";
import { persistor, store, wrapper } from "@/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Header from "@/components/common/Header";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App({ Component, ...pageProps }: AppProps) {
  const theme = createCustomTheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {/* <AppRouterCacheProvider> */}
          <StyledEngineProvider injectFirst>
            {/* <ColorModeProvider> */}
            <ThemeProvider theme={theme}>
              <Header />

              <Component {...pageProps} />
            </ThemeProvider>
            {/* </ColorModeProvider> */}
          </StyledEngineProvider>
          {/* </AppRouterCacheProvider> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
