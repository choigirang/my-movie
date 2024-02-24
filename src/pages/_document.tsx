import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v13-pagesRouter";
import Header from "@/components/common/Header";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en" data-color-scheme="light">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Header></Header>
      </body>
    </Html>
  );
}
