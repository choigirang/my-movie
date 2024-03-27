import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store, wrapper } from "@/store/store";

import Header from "@/components/common/Header";
import PropTypes from "prop-types";
import { ColorModeProvider, useColorMode } from "@/hook/useColorMode";

import "@/styles/globals.css";
import { createCustomTheme } from "@/styles/theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const theme = createCustomTheme();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {/* <AppRouterCacheProvider> */}
          <StyledEngineProvider injectFirst>
            {/* <ColorModeProvider> */}
            <ThemeProvider theme={theme}>
              <SessionProvider session={session}>
                <Header />
                <Component {...pageProps} />
              </SessionProvider>
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
