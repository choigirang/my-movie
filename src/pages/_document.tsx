import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material";
import { useThemeHandler } from "@/util/useThemeHandler";
import { createCustomTheme } from "@/styles/theme";
import { useMemo } from "react";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  const theme = createCustomTheme("light");

  return (
    <Html lang="en" data-color-scheme="light">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
